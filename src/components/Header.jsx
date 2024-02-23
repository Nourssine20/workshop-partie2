import { Link,NavLink } from "react-router-dom"

export default function Header(props) {

    console.log(props)
    const id =1;
    const title = props.title;
    return (
        <>
        <h1>Header</h1>
        <NavLink to={`/events?name=${title}`} style={({isActive})=> {{textDecoration:isActive ? 'underline':'none'}}} >Events </NavLink>
        <Link to={`/events/${id}/${title}}`}>Events Details</Link>
        <Link to="/products">Products</Link>
        <Link to="/counter">Counter</Link>

        </>
        )
}