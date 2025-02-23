import styled from "styled-components";
import { MdPhoneCallback } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'
import Drawer from "./Drawer";
import { useState } from "react";

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false);
  const toggleDrawer = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <>
     <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer}/> 
    <SNavbar>
<NavContainer> 
 
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
            <FaUserTie fontSize="25px" />
          </span>
          <div className="dropdown-content">
            <StyledLink to="/signin">SignIn</StyledLink>
            <StyledLink to="/signup">SignUp</StyledLink>
          </div>
        </Dropdown> 
        </RightNav>  
        <DrawerButton onClick={toggleDrawer}><FaBars /></DrawerButton>
</NavContainer> 
  </SNavbar >
 
    </>

  )
}

export default Navbar
const SNavbar = styled.nav`
background-color: #fec182;
`;
const NavContainer = styled.div`
padding: 0.5rem;  
display: flex;
justify-content: space-between;
align-items: center; 
`;
 
 
const Logo = styled.img`  
  max-width: 140px;  
  @media (max-width: 768px) {
    max-width: 120px;
}
`
const RightNav = styled.div`
display: flex;
gap: 2rem;
`;
const NavLink = styled.div` 
@media (max-width: 768px) {
  display: none;
}
 display: flex;
  padding: 20px; 
   font-size: 1.1rem;
  gap: 50px;
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
  width: 160px;
  height: 50px;
  padding: 10px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 20px;
  margin-right: 30px;
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
    @media (max-width: 768px) {
  display: none;
}
` 
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  width: 140px;
  align-self: center;
  height: 40px;
  &:hover > .dropdown-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #fec182;
  }
  .dropdown-content {
    position: absolute;
    display: none;
    align-items: center;
    width: 130px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    background-color: rgba(231, 131, 16, 0.91);
    padding: 10px 5px;
    border-radius: 5px;
    z-index: 2;
  }
    @media (max-width: 768px) {
  display: none;
}
`
const DrawerButton = styled.button`
all: unset;
font-size: 1.5rem;  
  display: none;
    @media (max-width: 768px) {
   display: block
 
}
` 