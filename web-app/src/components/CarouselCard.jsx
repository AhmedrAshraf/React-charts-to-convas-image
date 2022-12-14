import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import CarouselModal from './CarouselModal';
import { Chart } from "react-google-charts";
import Badge from 'react-bootstrap/Badge';

function CarouselCard(props) {

    // [value, function to set the value]
    const [modalShow, setModalShow] = useState(false);
    const {imgSrc} = props;
    


    return (
    <div style={{}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc}
              alt={props.title}/>
      <Card.Body>
        
        <Card.Title>{props.title}</Card.Title>
        <Badge pill bg="info">{props.winterBadge}</Badge>
        <Badge pill bg="warning">{props.summerBadge}</Badge>
        <Badge pill bg="danger">{props.autumnBadge}</Badge>
        <Badge pill bg="success">{props.springBadge}</Badge>


        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="outline-primary" size='sm' onClick={()=>setModalShow(true)}>View</Button>
        <CarouselModal
                    title={props.title}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    imgSrc={imgSrc}
                    />
      </Card.Body>
    </Card>
              
    </div>)
}

export default CarouselCard;

