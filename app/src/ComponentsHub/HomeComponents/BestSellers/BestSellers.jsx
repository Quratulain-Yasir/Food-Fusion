import { useState } from "react";
import styled from "styled-components";
import Model from "./Model";

const BestSellers = () => {
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Reviews>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="headline text-center">
                <h2 className="pt-5 pb-5 position-relative d-inline-block">
                  Best Sellers
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="row align-items-center mb-5">
              <div className="col-sm-12 col-lg-4 mb-lg-0 mb-5">
                <Img src="ff-12.jpg" alt="profile_pic" className="img-fluid img-card rounded-3 border border-2 custom-border" />
              </div>
              <div className="col-sm-12 col-lg-7 offset-lg-1 mb-md-3 mb-lg-0 ">
                <div className="p-3">
                  <h4>Velvet Mushroom Pasta</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Similique est aperiam ut consectetur provident.Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Similique est
                    aperiam ut consectetur provident.Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Similique est aperiam ut
                    consectetur provident.
                  </p>
                  <TransparentButton onClick={onOpen}>
                    Order Now
                  </TransparentButton>
                </div>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-sm-12 col-lg-4 mb-lg-0 mb-5">
                <Img
                  src="ff-3.jpg"
                  alt="profile_pic"
                  className="img-fluid img-card rounded-3 border border-2 custom-border"
                />
              </div>
              <div className="col-sm-12 col-lg-7 offset-lg-1 mb-3 mb-lg-0">
                <div className="p-3">
                  <h4>Strawberry Dessert</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Similique est aperiam ut consectetur provident.Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Similique est
                    aperiam ut consectetur provident.Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Similique est aperiam ut
                    consectetur provident.
                  </p>
                  <TransparentButton onClick={onOpen}>
                    Order Now
                  </TransparentButton>
                </div>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-sm-12 col-lg-4  mb-lg-0 mb-5">
                <Img src="ff-13.jpg" alt="profile_pic" className="img-fluid img-card rounded-3 border border-2 custom-border" />
              </div>
              <div className="col-sm-12 col-lg-7 offset-lg-1 mb-3 mb-lg-0">
                <div className="p-3">
                  <h4>Gluter Free Pizza</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Similique est aperiam ut consectetur provident.Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Similique est
                    aperiam ut consectetur provident.Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Similique est aperiam ut
                    consectetur provident.
                  </p>
                  <TransparentButton onClick={onOpen}>
                    Order Now
                  </TransparentButton>
                </div>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-sm-12 col-lg-4 mb-lg-0 mb-5">
                <Img src="ff-6.jpg" alt="profile_pic" className="img-fluid img-card rounded-3 border border-2 custom-border" />
              </div>

              <div className="col-sm-12 col-lg-7 offset-lg-1 mb-3 mb-lg-0">
                <div>
                  <h4>Special Platter</h4>

                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Similique est aperiam ut consectetur provident.Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Similique est
                    aperiam ut consectetur provident.Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Similique est aperiam ut
                    consectetur provident.
                  </p>
                  <TransparentButton onClick={onOpen}>
                    Locate me
                  </TransparentButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reviews>
      <Model isOpen={isOpen} onClose={onClose} className="card">
        <Card>
          <Logo src="/white-logo.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title mt-4 align-items-center">
              Enter your Location to Access Menu
            </h4>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg bg-light fs-6 input"
                placeholder="Enter your Location"
              />
            </div>
            <TransparentButton>See Menu</TransparentButton>
          </div>
        </Card>
      </Model>
    </>
  );
};
export default BestSellers;

const Reviews = styled.section`
  background-color: #fbc690;
  padding-bottom: 15px;
  .img-card{
     box-shadow: 8px  8px 16px 6px rgba(84, 39, 217, 0.667); 
  }
  .custom-border {
  border-color: rgb(83, 39, 217) !important; /* dark purple */
}
  h2 {
    height: 10rem;
  }
  p {
    color: #696969;
  }
  @media (min-width: 600px) and (max-width: 899px) {
    
  } 
`;
const Img = styled.img`
  /* tablet responsivness : smaller font size and full height  */
  @media (min-width: 600px) and (max-width: 899px) {
 width: 50%;
  }
`
const TransparentButton = styled.button`
  width: 6rem;
  height: 2.5rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid rgb(83, 39, 217);
  color: rgb(83, 39, 217);
  margin: 0 0.5em;
  padding: 0.25em 0.5em;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 0px 8px 16px 0px rgba(90, 12, 199, 0.2);
  &:hover {
    color: #fec182;
    background: rgb(83, 39, 217);
    transition: background 0.3s ease, color 0.3s ease;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .input {
    margin-top: 20px;
    background-color: transparent;
    border: 1px solid rgb(83, 39, 217);
    color: rgb(83, 39, 217);
    border-radius: 5px;
    height: 40px;
    width: 380px;
    font-size: 16px;
    padding: 0 10px;
    &::placeholder {
      color: #45346d;
    }
    &:focus {
      border: 1px solid rgb(83, 39, 217);
      outline: none;
    }
  }
  h4 {
    padding: 0 10px;
    align-items: center;
  }
`;
const Logo = styled.img`
  max-width: 160px;
  padding: 10px;
  align-items: center;
  /* tablet responsivness : smaller font size and full height  */
  @media (max-width: 768px) {
    padding: 5px;
  }
`;
