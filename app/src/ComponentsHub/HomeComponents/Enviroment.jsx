import React from "react";
import styled from "styled-components";

const Enviroment = () => {
  return (
    <Container className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center pt-5 gap-5">
        <div className="col-lg-5 col-md-6 mb-0 ms-lg-5"> 
            <img src="/E.jpg" alt="pic" className="img-fluid rounded-4" />
        </div>
        <div className="content col-lg-5 col-md-10 mb-3 ps-md-5 ms-sm-0">
          <h2>We Proud Ourselves On providing 24/7 support system.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
            consequatur praesentium labore ad maxime fugiat dignissimos quas id
            magni .Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Provident, consequatur praesentium labore ad maxime fugiat
            dignissimos quas id magni .Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Provident, consequatur praesentium labore ad
            maxime fugiat dignissimos quas id magni .Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Provident, consequatur praesentium
            labore ad maxime fugiat dignissimos quas id magni .
          </p>
          <TransparentButton className="btn mt-3">Read More</TransparentButton>
        </div>
      </div>
    </Container>
  );
};

export default Enviroment;
const Container = styled.div`
  background-color: rgb(255, 246, 217);  
  .content {  
    margin-top: 30px;
    padding-top:10px;
    padding-bottom:10px;
    margin-bottom:10px;
    p{
      color: #4e4d4d;
    }
  }
     /* tablet responsivness : smaller font size and full height  */
     @media (min-width: 600px) and (max-width: 899px) {
      align-items: center;
      .content {
    padding-top: 5px;
    margin-top: 20px; 
    padding-left: 40px;
    padding-bottom: 10px;
    h2 {
        font-size: 1.3rem;
      } 
      p{
        line-height: 20px;
         font-size: 13px;
}
  } 
  }
`
const TransparentButton = styled.button`
  width: 8rem;
  height: 2.5rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid rgb(83, 39, 217);
  color: rgb(83, 39, 217);
  margin: 0 0.5em;
  padding: 0.25em 0.5em; 
  font-size: 15px;
  font-weight: bold;
  box-shadow: 0px 8px 16px 0px rgba(90, 12, 199, 0.37);
  &:hover {
    color: #fec182;
    background: rgb(83, 39, 217);
    transition: background 0.3s ease, color 0.3s ease;
    cursor: pointer;
  }  
         /* tablet responsivness : smaller font size and full height  */
         @media (min-width: 600px) and (max-width: 899px) {
          margin: 0 0.5px;
          padding: 0.25px 0.5px;
         }
`;
