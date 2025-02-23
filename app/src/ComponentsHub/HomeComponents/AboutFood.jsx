import styled from "styled-components";

const AboutFood = () => {
  return (
    <Container>
      <div className="about-food">
        <div className="container about-food-text mt-4">
          <div className="row ">
            <div className="col-lg-9 col-md-12 ">
              <h2>Baked fresh daily by bakers with passion</h2>
            </div>
            <div className="col-lg-3 col-md-12 mt-lg-0 mt-4">
              <TransparentButton>Read More</TransparentButton>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutFood;
const Container = styled.section`

  .about-food { 
    width: 100%;
    background: url("/ff-9.jpg") no-repeat center;
    background-size: cover;
    background-attachment: fixed;  
    padding: 4.375rem 0;
    z-index: 1;
     position: relative;
  }
  @media (min-width: 600px) and (max-width: 899px) {
    .about-food {  
      background-size: cover;
      background-attachment: fixed; 
      padding: 5.375rem 0;
    }
  } 
` 
const TransparentButton = styled.button`
 
  width: 8rem;
  height: 2.5rem;
  background: transparent;
  border-radius: 5px;
  border: 2px solid rgb(83, 39, 217);
  color:rgb(83, 39, 217);
  margin: 1em 0.5em;
  padding: 0.25em 0.5em;
  margin-left:5rem;
  box-shadow: 0px 8px 16px 0px rgba(90, 12, 199, 0.37);
  font-size: 15px;
  font-weight: bold;
  &:hover {
    color: #fec182;
    background: rgb(83, 39, 217);
    transition: background 0.3s ease, color 0.3s ease;
    cursor: pointer;
    transform: scale(1.03);
  }
`;
