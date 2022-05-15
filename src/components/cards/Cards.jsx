import React from 'react'
import {Tab,Col,Card} from 'react-bootstrap'


function Cards2({aaaaa}) {
    const add=(a,b)=>a+b;
  return (
    <div>
      
    <Col>
      <Card>
        <Card.Img variant="top" src={aaaaa.img} />
        <Card.Body>
          <Card.Title>{aaaaa.name}</Card.Title>
          <Card.Text>
 
          
          <ul>
                  <li>{aaaaa.username}</li><br />
                  <li>{aaaaa.email}</li><br />
                  <li>{aaaaa.address.city}</li><br />
                  <li>{aaaaa.website}</li><br />
                  <li>{aaaaa.company.name}</li><br />
                  <li>{add(Number(aaaaa.address.geo.lat),Number(aaaaa.address.geo.lng))}</li><br />
                

                  </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  
    </div>)
  
}

export default Cards2