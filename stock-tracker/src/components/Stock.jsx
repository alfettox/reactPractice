import React from "react"

export default function Stock({stock}) {
          
    // console.log(stock)
    
    const {stockName, logo, currentPrice, prevClosingPrice} = stock
          
    const numericalChange = (currentPrice - prevClosingPrice).toFixed(2)
    
    const rateChange = (currentPrice /prevClosingPrice *100).toFixed(2)
    
    // const colorClass = numericalChange > 0? "green" : "red"

    let arrow

    let colorClass

    
    if (rateChange > 0) {
        colorClass = "green"
        arrow = "⬆"
    } else if (rateChange < 0) {
        colorClass = "red"
        arrow = "⬇"        
    } else {
        colorClass = undefined 
        arrow = "▬"
    }
    

    return (
        <div className="stock-container">
                <div className={colorClass}>
                    <p>{arrow}{numericalChange}</p>
                    <p>{rateChange}%</p>
                </div>
                <div>
                    <img className="logo" src={logo} />
                </div>
                <div> 
                    <p>{stockName}</p> 
                </div>
                <div>
                    <p>${currentPrice.toFixed(2)}</p>
                    <p>Current Price</p>
                </div>
                <div>
                    <p>Previous Close: ${prevClosingPrice}</p>
                </div>       
        </div>   
    )
}