import React from "react"


function Summary (){
    return(
        <section className ="summary container">
        
        <div className ="summary-title">
        <p>Subtotal</p>
        <p>Estimated TAX</p>
        <p>Promotional Code : <span className="promo">Z4KXLM9A</span></p>

        </div>

        <div className = "summary-price">
        <p>&#8358;2497.00</p>
        <p>&#8358;119.64</p>
        <p>&#8358;-60.00</p>

       

        </div>
        </section>
    )
}

export default Summary