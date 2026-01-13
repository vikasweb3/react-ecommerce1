import React from 'react'

const Navbar = ({data,setfdata,cart,cartshow,setcartshow}) => {
    function filterr(str){
        setfdata(data.filter((e)=>{
                return e.category == str
            }))
    }

  return (
    <div className="navbar">
        <button onClick={()=>{
            setfdata(data)
        }}>All</button>
        <button onClick={()=>{
            filterr("Beauty & Personal Care")
        }}>Beauty & Personal Care</button>
        <button onClick={()=>{
            filterr("Electronics & Gadgets")
        }}>Electronics & Gadgets</button>
        <button onClick={()=>{
            filterr("Home & Kitchen")
        }}>Home & Kitchen</button>
        <button onClick={()=>{
            filterr("Fashion & Apparel")
        }}>Fashion & Apparel</button>
        <button onClick={()=>{
            filterr("Health & Fitness")
        }}>Health & Fitness</button>
        <button onClick={()=>{
            if(cartshow){
                setcartshow(false);
            }else{
                setcartshow(true);
            }
        }}>cart</button>
        <span>{cart.length}</span>
    </div>
  )
}

export default Navbar