import styled from "styled-components";

const AboutBanner = () => {
  return (
    <Section>
      <TopBanner className="container-fluid px-0 top-banner overlay">
              <Overlay></Overlay>
        <div className="container">
          <div className="row  p-md-0 m-md-0">
            <BannerText className="col-lg-5 col-md-6 ">
              <h1>About Food Fusion</h1>
              <div>
                Our specialty lies in seamlessly blending diverse culinary
                traditions to create bold, innovative dishes that surprise and
                delight every palate
              </div>
            </BannerText>
          </div>
        </div>
      </TopBanner>
    </Section>
  );
};

export default AboutBanner;
const Section = styled.section`
  height: calc(100vh-20vh);
`;
const TopBanner = styled.div`

  position: relative;
  width: 100%;
  background: url("/ff-17.jpg") no-repeat center;
  background-size: cover;
  padding: 11.99rem 0 ;
        /* tablet responsivness : smaller font size and full height  */
        @media(max-width: 768px){
          padding: 6.99rem 0 ;
          padding-left: 0;
          margin-left:0 ;
 }
  
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:rgba(84, 39, 217, 0.562) ; /* Dark overlay with 50% opacity */
  z-index: 1;
`
const BannerText = styled.div`
display:flex;
flex-direction: column;
 
h1{
font-size: 50px;
}
position:relative;
z-index:2;
  width: 800px; 
  color: #fec182;
  div {
    font-size: 1.5rem;
  }
`;
