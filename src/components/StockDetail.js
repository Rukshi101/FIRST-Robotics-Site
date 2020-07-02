import React from 'react'


class StockDetail extends React.Component{
    state={
        show:false
    }
    render(){
        const {name,events} =this.props
        const {show} =this.state
        return(
           <div className = "StockDetail" onClick = {() =>this.setState({show:!show})}>
                <h2>Product Name: {name}</h2>
                {show &&
                <div>
                {events.map(event =>(
            <div className = "EventTable_Card">
              <p>Id:{event.id}</p>
              <p>Qty:{event.qty}</p>
              <p>ProductName:{event.product.name}</p>
           </div> 
               
               ) )}
               </div>
                }
               </div>
        )
    }
}

export default StockDetail;