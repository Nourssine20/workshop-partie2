import { useParams } from "react-router-dom";

function EventDetails(){
    const {title,id} = useParams();
    return (
        console.log(title),
        console.log(id),
        <h1>EventDetails</h1>
    );
}
export default EventDetails;