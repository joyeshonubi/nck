import React, {Component} from "react"
import { Col } from 'react-bootstrap';


class Card extends Component{

    

    render(){
 const {card, date} =  this.props.state
        return(
            <Col xs sm ={6}>
           
      <div className="col-sm-5 card">
      <div className="card__front card__part">
       
        <p className ="card-info">Card number</p>
        <p className="card-info">{card ? card : '4324 5433 9382 1030 '}</p>
        <img className="card-image" src="https://image.ibb.co/cZeFjx/little_square.png" alt ="Square crest"/>
        
        
        
          <p className=" card-info">Expiration date</p>
        <p className=" card-info">{date ? date: '03/24'}</p>
        
       
          <div className="card-lower">
          <p className=" card-info" id ="john">John Doe</p>
          <img className ="mc" src ="images/mastercard.svg" alt ="mastercard" />
          </div>
       
      </div>
      
      <div className="card__back card__part">
        <div className="card__back-content">
          <div className="card__secret">
            <p className="card__secret--last">420</p>
          </div>
          <img className="card__back-logo card__logo" src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png" alt ="Visa" />
          
        </div>
      </div>
      
    </div>
    </Col>
        )
    }
}

export default Card