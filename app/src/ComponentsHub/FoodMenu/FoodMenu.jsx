import styled from 'styled-components'
import React, { useEffect, useState } from 'react'

const FoodMenu = () => {
  const [ data , setData ] = useState(null)
  const [ loading , setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

 
 const BASE_URL = 'http://localhost:9000'

    useEffect(()=>{
      const fetchFoodData = async () => {
      setLoading(true)
      try{ 
         const  response = await fetch(BASE_URL); 
         const  Json = await response.json() ;
          setData(Json);
          setLoading(false)
         }
    
      catch (error) {
setError('UNABLE TO FETCH DATA')
      }
    }
      fetchFoodData();
      
    } , [] )

console.log(data)
console.log('data')
    if(loading) <div>'loading....'</div>
    if(error) <div>{error}</div>


  return (
<FoodCardContainer>
<FoodCards>

{data?.map((dataItem)=> 
<FoodCard key={dataItem.name}>
<div className="food_img">
<img src={BASE_URL + dataItem.image} />
</div>
<div className='food_info'>
<div className="info">
<h3>{dataItem.name}</h3>
<p>{dataItem.text}</p>
</div>
<Button>${dataItem.price}</Button>
</div>

</FoodCard>

)}
</FoodCards>
</FoodCardContainer>
  )
}

export default FoodMenu

const FoodCardContainer = styled.div` 
background: rgb(255, 246, 217) ; 
padding-bottom:7rem;
`
const FoodCards = styled.div`
padding: 40px;
display: flex;
   flex-wrap: wrap;
   row-gap: 23px;
   column-gap: 20px;
    justify-content: center;
   
`
const FoodCard  = styled.div` 
   width: 400px; 
   height: 192px;
   display: flex;
   flex-direction: row;
  /* mobile */
  @media(max-width: 375px){
    display: flex;
    flex-direction: column;
    width: unset;
    height: unset;
  }
 border: 0.66px solid #eabfff;
 border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px); 
  border-radius: 20px;
  display: flex;
  padding: 8px;

  .food_info{ 
      display: flex;
   justify-content: space-between;
      align-items: end;

  }
  .info{
    h3{
font-size: 1rem;
margin-top: 20px;
font-weight: 500;
    }
    p{
      color: #696969;
      font-size: 0.9rem;
      margin-top: 10px;
    }
        /* mobile */
        @media(max-width: 599px){
          h3{
margin-top: 10px;
    }
    p{
      margin-top: 3px;
      line-height: 1.2rem;
    }
}
 
  }

`
const Button = styled.button` 
  width: 3.5rem;
  height: 2.2rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0 1em;
  padding: 0.25em 0.5em;
  &:hover{
    color: #fefefe;
    background: #BF4F74;
    transition: background 0.3s ease, color 0.3s ease;
  }
`