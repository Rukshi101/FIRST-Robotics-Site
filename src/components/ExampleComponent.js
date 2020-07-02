import React from 'react'


import StockDetail from './StockDetail'
function ExampleComponent(props){
    
    const {products,events} = props
    console.log("PRODUCTS VALUE FROM AXIOS", products)
    
    return (
     <div className = "ExampleComponent">
       {products.map(product =>{
         const {id}= product

        const relevantStockEvents = events.filter(se => se.product.id === product.id)
        return(
          <div className = "StockEventTable__ProductContainer">
            <StockDetail
             name = {product.name}
              events = {relevantStockEvents}
              />
           
          

   
            </div>
        )
       })}
      
     </div>
    )
  }

  export default ExampleComponent;