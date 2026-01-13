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
            filterr("electronics")
        }}>electronics</button>
        <button onClick={()=>{
            filterr("jewelery")
        }}>jewelery</button>
        <button onClick={()=>{
            filterr("men's clothing")
        }}> men's clothing</button>
        <button onClick={()=>{
            filterr("women's clothing")
        }}>women's clothing</button>
        {/* <button onClick={()=>{
            filterr("Health & Fitness")
        }}>Health & Fitness</button> */}
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