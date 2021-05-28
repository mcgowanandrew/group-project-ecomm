import React,{useEffect,useState} from "react"
import styled from "styled-components"
import AllItems from "./Item/AllItems"

const ShopAll = ()=>{
    const [allItems, setAllItems]=useState([])
    useEffect(()=>{
      fetch("/items",{method:"GET"})
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        // console.log("cool",data[1])
        const feedArray= Object.values(data)[1]
        setAllItems(feedArray)

  
      })
    },[])
    // console.log("all",allItems)

    return(
<PageWrap>
<GridWrap>
{allItems.map((item)=>{
  // console.log("hi",item.name)
    return <AllItems key={item._id} item={item}/>;
})}



</GridWrap>
</PageWrap>


    )
}

const PageWrap = styled.div`
width:100vw;
height:100vh;`

const GridWrap = styled.div`
width:80vw;
margin:0 auto;
display:grid;
grid-template-columns:30rem 30rem 30rem;
justify-content:space-between;
align-items: center;
grid-gap:1.5rem;`
export default ShopAll