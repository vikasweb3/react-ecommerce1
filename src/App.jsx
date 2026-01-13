import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Product from './Product';
import Cardc from './cardc';


const App = () => {

  const [data,setdata] = useState([]);
  const [fdata,setfdata] = useState([]);
  const [cart,setcart] = useState([]);
  const [cartshow,setcartshow] = useState(false);
  console.log((data))
console.log(cart);
  
  async function fetchh() {
    const res = await fetch('data.json');
    const fdata = await res.json();
    setdata(fdata)
  }

  useEffect(()=>{
    setTimeout(() => {
      fetchh()
    }, 1000);
  },[])

  return (
    <div  className="product-grid">
      <Navbar cartshow = {cartshow} setcartshow = {setcartshow} cart = {cart} setfdata = {setfdata} data = {data}></Navbar>
       {
        cartshow?(
          cart.map((card)=>{
            return <Cardc card = {card}/>
          })
        ):(fdata.map((card)=>{
          return <Product cart = {cart} setcart = {setcart} card = {card}></Product>
        }))
       }
    </div>
  )
}

export default App