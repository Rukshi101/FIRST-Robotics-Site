import React from 'react'


import {Link} from 'react-router-dom'

export default () =>(
    <div className = "Nav">
        <h1>STOCK APP</h1>
        <Link className = "Nav_Link" to = "products">PRODUCTS</Link>
    </div>
)