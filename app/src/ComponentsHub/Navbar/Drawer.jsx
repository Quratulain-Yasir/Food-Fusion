import React from "react";
import styled from "styled-components";
import { MdPhoneCallback } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import ExpandMenu from "./ExpandMenu";

const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
      <Logo src="/white-logo.png" alt="resturnt_logo" />
<RightNav>
        <NavLink>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/aboutus">About Us</StyledLink>
        <StyledLink to="/food">Food</StyledLink>
        <StyledLink to="/qna">Q&A</StyledLink>
      </NavLink> 
        <Box>
          <span>
            <MdPhoneCallback />
          </span>
          030478905
        </Box>
        <Dropdown>
          <span>
            <FaUserTie fontSize="33px" />
          </span>
          <div className="dropdown-content">
            <StyledLink to="/signin" className='size'>SignIn</StyledLink>
            <StyledLink to="/signup" className='size'>SignUp</StyledLink>
          </div>
        </Dropdown> 
        </RightNav> 
     
      </SDrawer>
    </>
  );
};

export default Drawer;
 
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;

  background-color: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 60%;
  background-color: #fec182;
  transition: 0.3s ease;

  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;
 
const Logo = styled.img` 
@media (max-width: 768px) {
  display: none;
}
  max-width: 140px;  
` 
const NavLink = styled.div` 

 display: flex;
 flex-direction:column;
  padding: 17px; 
  padding-top: 5rem; 
   font-size: 1.3rem;
  gap: 40px;
  align-items: center;  
`
const StyledLink = styled(Link)`
  text-decoration: none;  
  font-weight: 700;
  color: rgb(83, 39, 219);
  &:hover {
   transition: 0.5s ease;
    color: rgb(60, 7, 219);
  }
`  
const Box = styled.span`
@media (max-width: 768px) {
  display: none;
}
  width: 160px;
  height: 50px;
  padding: 10px;
  text-align: center;
  margin-top: 5px;
 
  margin-left: 10rem;
  border: 3px solid rgb(83, 39, 217);
  color: rgb(83, 39, 217);
  border-radius: 20px;
  font-weight: 500;
  font-size: 1.2rem;
  transition: background 0.3s ease, color 0.3s ease;
  &:hover {
    // & refer to the box it self
    background: rgb(83, 39, 217);
    color: rgb(217, 187, 39);
  }
  span {
    padding-right: 8px;

    &:hover {
      color: rgb(217, 187, 39) !important;
    }
  }
` 
const Dropdown = styled.div`
 padding: 0.7rem 3rem;
 margin-left: 2rem;
  position: relative;
  display: inline-block;
  width: 140px;
  align-self: center;
  height: 40px;
  &:hover > .dropdown-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
   

  }
  .dropdown-content { 
    position: absolute;
    display: none;
    align-items: center;
    width: 130px;
    // box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
 
    padding: 7px 5px;
    padding-left:3rem;
    border-radius: 5px;
    z-index: 2; 

  }
    .size{ 
    font-size:1.3rem;
        // background-color:yellow;
    margin-bottom:0.7rem;
    }
`