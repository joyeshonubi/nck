import React, {Component} from 'react';

import './App.css';
import { Row,  Button } from 'react-bootstrap';
import Card from "./Card"
import  FormComponent from './Form'
import Summary from './Summary'

class App extends Component {
  state = {
    
    card: '',
    date: ''
  }

  handleChange =(e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }
  render(){
  return (
    <div className ="container">
    <nav>
    <ul>
    <li>Trips</li>
    <li>Recently viewed</li>
    <li>Bookings</li>
    <img src ="images/avatar2.png" alt= "Profile" />
    </ul>
    </nav>
    <hr/>


    <div className ="container section-2" >
    
    <div className= "details-head ">
    <div>
    <h2 id="payment-info">Payment Information</h2>
    <p id ="choose-method">Choose your method of payment</p>
    </div>
    

    <div className ="logos">
    <img src = 'images/visa.svg' alt="Visa" />
    <img src = 'images/discover.svg' alt="Discover" />
    <img src = 'images/paypal.svg' alt="Paypal" />
   
    </div>
    </div>
    
    <Row >
    <Card state ={this.state} />
    <FormComponent handleChange ={this.handleChange} state= {this.state}/>
    </Row>
   
    <hr/>
    </div>
    <Summary/>
    <hr/>
    <section className ="final container">
    <Button className="paynow" size="lg">Complete payment</Button>
    <p className="total"> TOTAL :&#8358;2556.00</p>
    </section>
    </div>
  );
  }
}

export default App;
