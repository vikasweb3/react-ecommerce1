import React from 'react'

const Product = ({card,cart,setcart}) => {
  return (
    <div className="card">
        <h1>{card.id}</h1>
        <p>{card.name}</p>
        <img src={card.image} alt="" />
        <p>{card.priceCents}</p>
        <button onClick={()=>{
          setcart([...cart,card])
        }}>add to cart</button>
    </div>
  )
}

export default Product