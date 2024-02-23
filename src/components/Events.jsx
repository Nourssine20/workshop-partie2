import Event from "./Event";
import events from "../events.json";
import { Container,Row ,Col, Alert} from "react-bootstrap";
import {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
function Events() {
    const [showWelcome,setShowWelcome] = useState(true)
    const [role,setRole] = useState("admin")
    const [searchParams,setSearchParams] = useSearchParams({}); 
    useEffect(() =>{ //cycle de vie(mounting, update, unmouting)
        console.log(searchParams.get("name"));
        console.log(searchParams.get("id"));
       setTimeout(() => {
        setShowWelcome(false)
       },3000)
    },[]) //[]: execution seule fois //[id] texecuti kol mayetbdl l id // kif yebda mfmch [] yexecuti kol mara 
    const [show, setShow] = useState(false);
const Buy = (event) => {
    setShow(true);
    event.nbTickets--;
    event.nbParticipants++;
    setTimeout(() => {setShow(false)}, 2000)
}

    return (
        <Container>
            <Row>
                {showWelcome && <Alert variant="success"> Hey welcome to esprit events</Alert> }
               {events.map((element,index) => {
                 return (
                    <Col key={index} md={4}>
                 <Event event={element} Buy={Buy} />
                 </Col>)
               })} 
            </Row>
            {show && <Alert variant ="success">You have booked an event</Alert> }
        </Container>
      
    )
}
export default Events;