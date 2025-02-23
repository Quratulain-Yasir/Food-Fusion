import styled from "styled-components";
import { LuLocateFixed } from "react-icons/lu";

const HeroSection = () => {
  return (
    <>
      <Container>
        <div className="row align-items-center mt-3">
          <div className="col-lg-3 col-md-12 col-sm-4 mb-lg-0 mb-3 ">
            <div className="input-section">
              <h2>
                Its the food and taste you love ,<br /> delivered
              </h2>
              <input placeholder="Your street and street number" />
              <TransparentButton>
                <span>
                  <LuLocateFixed size={14} />
                </span>{" "}
                Locate me{" "}
              </TransparentButton>
              <Button>Find Food</Button>
            </div>
          </div>
          <RightBox className="col-lg-3 col-md-12 mb-lg-0 mb-5 ">
            <div className="card c1">
              <img src="ff-11.jpg" alt="pic" className="img-fluid" />
            </div>
            <div className="card  c2">
              <img src="ff-H_1.jpg" alt="pic" className="img-fluid" />
            </div>
            <div className="card  c3">
              <img src="ff-9.jpg" alt="pic" className="img-fluid" />
            </div>
          </RightBox>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;

const Container = styled.section`
  background-color: rgb(255, 246, 217);
  height: 80vh;
  padding-left: 35px;
  padding-top: 30px;
  @media (max-width: 599px) {
    background-color: rgb(0, 195, 255);
    height: 53vh;
    padding-left: 8px;
  }
  h2 {
    color: rgb(83, 39, 217);
    font-size: 40px;
    width: 700px;
    @media (max-width: 599px) {
      color: rgb(8, 91, 116);
      font-size: 35px;
      width: 489px;
    }
  }
  .input-section {
    background-color: yellow;
    margin-top: 18px;
    width: 715px;

    /* mobile */
    @media (max-width: 599px) {
      background-color: #c300ff;
      width: 550px;
    }
    input {
      margin-top: 10px;
      background-color: transparent;
      border: 1px solid rgb(83, 39, 217);
      color: rgb(83, 39, 217);
      border-radius: 5px;
      height: 40px;
      width: 450px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: #45346d;
      }
      &:focus {
        border: 1px solid rgb(83, 39, 217); /* Change border color to purple when the input is focused */
        outline: none; /* Remove the default outline around the input */
      }
    }
  }
  /* tablet */
  @media (min-width: 600px) and (max-width: 899px) {
  }
`;
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
  &:hover {
    color: #fec182;
    background: rgb(83, 39, 217);
    transition: background 0.3s ease, color 0.3s ease;
    cursor: pointer;
  }
  span {
    padding-right: 5px;
  }
  /* tablet */
  @media (min-width: 600px) and (max-width: 899px) {
    margin: 0;
  }
  /* mobile */
  @media (max-width: 599px) {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  width: 6rem;
  height: 2.5rem;
  background: rgb(83, 39, 217);
  border-radius: 4px;
  border: 2px solid rgb(83, 39, 217);
  color: #fec182;
  margin: 0 0.5em;
  padding: 0.25em 0.5em;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    color: #fec182;
    background: rgb(64, 18, 201);
    border: 2px solid rgb(64, 18, 201);
    transition: background 0.3s ease, color 0.3s ease;
    cursor: pointer;
  }
  @media (min-width: 600px) and (max-width: 899px) {
    margin: 0;
  }
  /* mobile */
  @media (max-width: 599px) {
    margin-top: 10px;
  }
`;
const RightBox = styled.div`
  align-items: center;
  margin-left: 550px;
  height: 450px;
  background-color: #00ff628d;
  img {
    border-radius: 30px;
  }
  .c1 {
    width: 80%;
    border-radius: 30px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 0;
  }
  .c2 {
    width: 20%;
    border-radius: 30px;
    margin-top: -30px;
    margin-left: -50px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    position: absolute;
    z-index: 1;
  }
  .c3 {
    border-radius: 30px;
    width: 83%;
    position: relative;
    margin-top: 70px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }
  /* tablet */
  @media (min-width: 600px) and (max-width: 899px) {
    margin-left: 140px;
    height: 520px;
    .c1 {
      width: 37%;
    }
    .c2 {
      width: 35%;
      margin-top: -60px;
      margin-left: -50px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    }
    .c3 {
      width: 37%;
      position: absolute;
      margin-top: 60px;
      margin-left: 1px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    }
  }

  /* mobile */
  @media (max-width: 599px) {
    margin-left: 150px;
    height: 400px;
    width: 440px;

    .c1 {
      width: 60%;
    }
    .c2 {
      width: 40%;
      margin-top: -60px;
      margin-left: -50px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    }
    .c3 {
      width: 40%;
      position: absolute;
      margin-top: 60px;
      margin-left: 1px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    }
  }
`;
