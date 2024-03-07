
import React, { Suspense, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
//import Header from './components/Header'
//import Products from './components/Products';
//import Events from './components/Events';
import { Routes, Route } from 'react-router-dom';
//import EventDetails from './components/EventDetails';
const Header = React.lazy(()=> import ('./components/Header'));
const Products = React.lazy(()=> import ('./components/Products'));
const Events = React.lazy(()=> import ('./components/Events'));
const EventDetails = React.lazy(()=> import ('./components/EventDetails'));
import NotFound from './components/NotFound';
import CounterRedux from './components/CounterRedux';
const NavigationBar = React.lazy(() => import('./components/Navbar'));


function App() {

  const [show, setShow]=useState(true)
  const [role, setRole]=useState()
 
  let name = "test";
  let person = {
    name : "Test",
    age: 30,
  };
  let b = false ;
  const style1 = {
    color:'red',
    backgroundColor: 'blue',  
  }
  let students = [
    {name:"s1" , age: 10},
    {name:"s2" , age: 20 },
    {name:"s3" , age:30},
  ];
  function test(){
    console.log("Im here...");
  }
  function getPerson(person1) { 
    return person1;
  }
  return (
  
 
  
  <Suspense fallback={<h1>Loading</h1>} >
     <NavigationBar />

  
      <Routes>
        {role == 'admin' ? (
          <Route path="/admin" element={<Dashboard/>} >
            <Route path='users' element={<Users/>}/>
          </Route>
  ): (
       <>
        <Route path="/events" >
        <Route index element={ <Events />} />
        <Route path=":id/:title" element={ <EventDetails/> } />
        </Route>
       <Route path="/counter" element={<Counter />} />
        <Route path="/products" element={<Products />} />
       {/* <Route path="/events" element={<Events />} />*/}
       <Route path="*" element={<NotFound />} />
       <Route path="/reduxcounter" element={<CounterRedux/>} />
       </>
       )}
      </Routes>
      </Suspense>
      
  );
}

export default App;
