import React,{useEffect,useState} from "react"
import styled from "styled-components"
import Item from "../components/Item/Item"

const ShopAll = ()=>{
    const [allItems, setAllItems]=useState([])
    useEffect(()=>{
      fetch("/items",{method:"GET"})
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        setAllItems(data)
        console.log("all",allItems)
  
      })
    },[allItems])

    return(

<Wrapper>
{/* {allItems.map((item)=>{
    return(<Item 
    price={item.price}/>

    )
})} */}



</Wrapper>



    )
}



const Wrapper = styled.div``
export default ShopAll