import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
function Event(props) {
  const [event,setEvent] = useState(props.event)
  const src = event.nbTickets ===0 ? "images/sold_out.png" : `images/${event.img}`;
  const msg = event.like ? "Dislike" : "Like";
  const handlelike =useCallback(() =>{
    setEvent({...event,like: !event.like});
  },[event.like])
    return (

    <Card >
      <Card.Img variant="top" src={src} height={250}/>
      <Card.Body>
          {/* Utilisez le composant Link pour créer un lien vers les détails de l'événement */}
          <Link to={`/events/${event.id}/${event.title}`} style={{ textDecoration: 'none' }}>
          <Card.Title>{event.title}</Card.Title>
        </Link>
        {/* Ajoutez le titre comme lien sous la photo */}
        <Link to={`/events/${event.id}/${event.title}`} style={{ textDecoration: 'none' }}>
          <p style={{ color: 'blue', textDecoration: 'underline' }}>Festival international de Carthage</p>
        </Link>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text>
         Price  : {event.price}
        </Card.Text>
        <Card.Text>
         Number of tickets : {event.nbTickets}
        </Card.Text>
        <Card.Text>
         Number of participants : {event.nbParticipants}
        </Card.Text>
        <Button variant="primary" onClick={handlelike}>{msg}</Button>
        <Button variant="primary" onClick={()=>props.Buy(event)} disabled={event.nbTickets==0 ? true: false }>Book an event</Button>
      </Card.Body>
    </Card>
  );
}

export default Event;