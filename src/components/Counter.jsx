import { Component} from "react";
class Counter extends Component {

constructor(props) {
    super(props);
    //console.log(this.props)
    console.log('Im the constructor');
   
}
static getDerivedStateFromProps(props ,state) {
console.log('Im rendering state');
}
shouldComponentUpdate(nextProps, nextState) {
   // return this.state.count > 3 ? false : true
   return true;
    
}
getSnapshotBeforeUpdate(prevProps, PrevState) { 
    console.log(prevProps);
    console.log(PrevState);
    return null;
}
componentDidUpdate(){
    console.log('Im updating');
}
componentDidMount() {
    console.log('Im mounting...');}
//props: yethatou fih les variables li jewni mn and composant parent 
//state: les variables locales
   state = {count: 0, product:{id:1, title:'product1'},name:this.props.PropName}
    increment=()=>{
        this.setState({count:this.state.count +1})
        this.setState({product:{ ...this.state.product, id:this.state.product.id +1}}) //... : spread operator : pour garder les autres propriétés et modifier seulemnt l'id , le titre reste le meme
        console.log(this.state)
    }
    decrement=()=>{
        this.setState({count:this.state.count -1})
    }
     render(){
        return(
            <>
            {console.log('Im rendering...')}
          
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement} disabled={this.state.count == 0}>Decrement</button>
            <h1>{this.state.name}</h1>
            {[... Array(this.state.count)].map((item,index)=>{
                return <Cell key={index} count={index}/> })}
        </>
        )
}
}
export default Counter;
class Cell extends Component{
    constructor (props){
        super (props)
    }
    componentWillUnmount () { 
        console.log('Im unmounting...')
    }
    render() {
        return <h1>{this.props.count}</h1>

}
}
