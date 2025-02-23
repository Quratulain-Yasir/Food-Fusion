import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
  return (
     
        <div>
    {/* <!-- ================== footer section ================== --> */}

    <FooterPanel1 className='col-md-5 col-md-12 px-md-4pb-lg-3'>
            <ul>
                <p>Get to Know Us</p>
                <a>Careers</a>
                <a>Blog</a>
                <a>About FoodFusion</a>
                <a>Investor Relations</a>
                <a>FoodFusion Devices</a>
                <a>FoodFusion Science</a>
                
            </ul>  
                <ul>
                    <p>Make Money with Us</p>
                    <a>Sell Fusion on FoodFusion</a>
                    <a>Sell on FoodFusion Business</a> 
                    <a>Become an Affiliate</a> 
                    <a>Self-Publish with Us</a>
                    <a>Host an Amazon Hub</a>
                    <a>See More Make Money with Us</a>
                </ul>  

                
                    <ul>
                        <p>FoodFusion Payment Products</p>
                        <a>FoodFusion Business Card</a>
                        <a>Shop with Points</a>
                        <a>Reload Your Balance</a>
                        <a>FoodFusion Currency Converter</a>
                    </ul>  
        </FooterPanel1>


    <FooterPanel2 className='col-md-12'> 
            <p className='footer-p2'>Copyright &copy 2025 <Link to='/'>FoodFusion</Link></p> 
            <p className='footer-p2'>Designed by <a href="#" target="_blank">DEVELOPER_QURATULAIN</a>.</p> 
    </FooterPanel2>
  </div>
   
  )
}

export default Footer

 
const FooterPanel1 = styled.div` 
 display: flex;
 justify-content: space-evenly;
background-color:#FEC182;
 p{
font-size: 1rem;
font-weight: 600; 
   }
   ul{
    margin-top: 20px;
}
a{
    display: block;
    font-size: 0.85rem;
    margin-top: 10px;
    color: rgb(83, 39, 217);
}
 /* mobile */
 @media(max-width: 599px){
  ul{
    padding-left: 0.7rem;
  }
 }
`
const FooterPanel2 = styled.div`
     
 /* height: 80px; */
 padding-top:5px;
 padding-bottom:5px;
  /* margin-bottom:unset; */
background-color: #be74e9;
color:#FEC182;

.footer-p2{
    font-size: 0.9rem;
    font-weight: 400;
    text-align:center; 
    padding-bottom: 3px;
}
a{
    text-decoration:none;
    color: #FEC182;
}
`