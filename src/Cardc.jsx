import React from 'react'

const Cardc = ({card}) => {
  return (
    <div  className="card">
        <h1>{card.id}</h1>
        <p>{card.name}</p>
        <img src={card.image} alt="" />
        <p>{card.priceCents}</p>
    </div>
  )
}

export default Cardc