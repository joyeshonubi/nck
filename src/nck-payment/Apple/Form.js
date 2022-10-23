import React, {Component} from "react"
import { Col, Form, Button, Row } from 'react-bootstrap';

class FormComponent extends Component{

    
    render(){
        const {handleChange} = this.props
        const {card, date} = this.props.state

        return(
  <Col xs sm md ={6}>
    
    <Form>
        <Form.Group as ={Row} controlId="formBasicEmail">
        <Col sm= {6}>
            <Form.Label>Credit card number</Form.Label>
            <Form.Control name="card" value ={card} required onChange ={handleChange} type="number" placeholder="4324 5433 9382 1030 " className ="form-control-self"/>
           
            </Col>  

            <Col sm= {6}>
            <Form.Label>Expiration date</Form.Label>
            <Form.Control name="date" value ={date} type="text" title ="Use the pattern MM/YY" required pattern="(0[1-9]|1[0-2])/[0-9]{2}" onChange ={handleChange} placeholder="03/24" className ="form-control-self" />
            
            </Col>  
        </Form.Group>

        <Form.Group as ={Row} controlId="formBasicEmail">
        <Col sm= {6}>
            <Form.Label>Security code </Form.Label>
            <Form.Control type="password" placeholder="420" className ="form-control-self" />
            
            </Col>  

            <Col sm= {6}>
            <Form.Label>Postal code</Form.Label>
            <Form.Control type="number" placeholder="10119" className ="form-control-self" />
           
            </Col>  
        </Form.Group>
            
            
        <Form.Group id="formGridCheckbox">
        <Form.Check type="radio" label="Use this card for next time purchase " />
        </Form.Group>

        <Button onSubmit={(e) => e.preventDefault()} type ="submit" variant="primary" size="lg" block>  Add card     </Button>
  </Form>

</Col>
        )
    }
}

export default  FormComponent








//  <Form.Row>
// <Form.Group as={Col} controlId="formGridEmail">
// <Form.Label>Email</Form.Label>
// <Form.Control type="email" placeholder="Enter email" />
// </Form.Group>

// <Form.Group as={Col} controlId="formGridPassword">
// <Form.Label>Password</Form.Label>
// <Form.Control type="password" placeholder="Password" />
// </Form.Group>
// </Form.Row>

// <Form.Row>
// <Form.Group as={Col} controlId="formGridEmail">
// <Form.Label>Email</Form.Label>
// <Form.Control type="email" placeholder="Enter email" />
// </Form.Group>

// <Form.Group as={Col} controlId="formGridPassword">
// <Form.Label>Password</Form.Label>
// <Form.Control type="password" placeholder="Password" />
// </Form.Group>
// </Form.Row>

// <Form.Row>
// <Form.Group as={Col} controlId="formGridEmail">
// <Form.Label>Email</Form.Label>
// <Form.Control type="email" placeholder="Enter email" />
// </Form.Group>

// <Form.Group as={Col} controlId="formGridPassword">
// <Form.Label>Password</Form.Label>
// <Form.Control type="password" placeholder="Password" />
// </Form.Group>
// </Form.Row>
