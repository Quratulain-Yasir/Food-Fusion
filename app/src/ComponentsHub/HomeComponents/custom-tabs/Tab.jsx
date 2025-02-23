import React, { useState } from 'react'
import styled from 'styled-components'
const Tab = ({ tabContent , onChange }) => {
 const [ currentTabIndex , setCurrentTabIndex ] = useState(0);
const handleOnClick = (getCurrentTabIndex) => {
    setCurrentTabIndex(getCurrentTabIndex);
    onChange(getCurrentTabIndex)
}
  return (
    <Container className="container-fluid m-0 px-0" >
      <Title className="pt-5 pb-3">Our Client-Centric Customized Menu</Title>
     <div className=" mt-4 mt-lg-5 heading gap-2 col-lg-7 " >
     {tabContent.map(({ label } , index )=>(
  <div className="heading-text" key={label} onClick={()=>handleOnClick(index)}>
    <span>{ label }</span>
  </div>
 ))}
     </div>

 <Content  key={currentTabIndex}  className="container mt-4 pb-5">
  {tabContent[currentTabIndex] && tabContent[currentTabIndex].content}
 </Content>
    </Container>

  )
}

export default Tab

const Container = styled.section`  
  .heading{ 
    display: flex;
    flex-direction: row; 
     text-align: center; 
     justify-content: center;
   }
    .heading-text{ 
    background-color: rgb(83, 39, 217); 
    color: #ecc297;
    padding: 10px 18px;
    text-align: center; 
  font-size: 16px; 
  border-radius: 10px;
  border:none;
  cursor: pointer;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  transform: skewX(-20deg);
  transition: transform 0.2s ease, background-color 0.3s ease;
    &:hover {
      background-color: rgb(83, 39, 217);
      color: #ecc297;
      outline: none;
      transform: skewX(-20deg) scale(1.03);
    }
    
    }              
         @media (max-width: 599px) { 
          .heading{ 
    flex-direction: column; 
    padding: 3px 19px;
   }
         }
`
const Title = styled.h2` 
font-size: 40px;
padding-left: 70px;
         /* tablet responsivness : smaller font size and full height  */
         @media (max-width: 599px) {
          font-size: 34px;
          padding-left: 20px;
} 
`
const Content = styled.div`
  opacity: 0;
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
 