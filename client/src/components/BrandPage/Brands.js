import React ,{useEffect,useState} from "react"
import styled from "styled-components"
import List from "./List"


const Brands = ()=>{
    const [allBrands, setAllBrands] = useState([]);
    useEffect(() => {
        fetch("/companies", { method: "GET" })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
              console.log("data",data)
            const feedArray = Object.values(data)[1];
            console.log("feed",feedArray)
            setAllBrands(feedArray);
          });
      }, []);
      console.log("all",allBrands)

return(

<Wrap>
  <BrandWrap>
    {allBrands.map((brand) => {
          return <List key={brand._id} brand={brand} />;
          
        })}
  </BrandWrap>
  </Wrap>


)
}
const Wrap = styled.div`
width:100vw;
height:100vh;`


const BrandWrap = styled.div`
  margin: 3rem auto;
width:80vw;
display:grid;
grid-template-columns: 30rem 30rem 30rem 30rem;
gap:3rem;`
export default Brands