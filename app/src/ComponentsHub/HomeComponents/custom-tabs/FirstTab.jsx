import React from 'react'
import styled from 'styled-components'

const FirstTab = () => {
  return (
    <Container className='container m-0'>
<div className="row">
      <div className="col-lg-5 col-md-12 pe-5 pb-md-3 pt-md-3 p-md-5">
        <h2 className="tabs-content-title">Small Family Gathering</h2>
        <p className="tabs-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam, nulla nam, similique architecto odit voluptate qui quo voluptatum ex reiciendis voluptas incidunt aliquid sapiente perspiciatis! Repudiandae ipsam cumque harum.</p>
        <p className="tabs-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam, nulla nam, similique architecto odit voluptate qui quo voluptatum ex reiciendis voluptas incidunt aliquid sapiente perspiciatis! Repudiandae ipsam cumque harum.</p>
        <Button className="detail-btn">Read More</Button>
      </div>
      <TabImg className="col-lg-7  left col-md-12 tabs-img m-0 ps-5  mt-5 mt-md-0 ps-md-0 ps-md-5 d-flex align-items-center">
    <img src="/small-gathering.jpg" alt="tab_1_img" />
      </TabImg>
</div>
      
    </Container>
  )
} 
export default FirstTab

const Container = styled.div`  
display: flex;
align-items: center;
justify-content: space-between;  
.tabs-content {
    color: #696969;
} 
` 
const Button = styled.button` 
    background-color: rgb(83, 39, 217);
    color: #ecc297;
    padding: 10px 17px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    border:none;
    cursor: pointer; 
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    &:hover {
      background-color: rgb(83, 39, 217);
      color: #ecc297;
      outline: none;
      transform: scale(1.03);
    } 
`
const TabImg = styled.div` 
img{
        width:90%;
        margin-bottom: 10px;
        border-radius: 10px; 
    }
         /* tablet responsivness : smaller font size and full height  */
         /* @media (min-width: 600px) and (max-width: 899px) {
          img{
        width:80%;
    }
         } */
`