 
import { RiUserStarFill } from "react-icons/ri";
import { FcCollaboration } from "react-icons/fc";
import { RiScales3Fill } from "react-icons/ri";
import { TbTransformPointTopRight } from "react-icons/tb";
import { GiGrowth } from "react-icons/gi";
import styled from 'styled-components';

const CoreValues = () => {
  return (
  
    <Section>
      <div className="container  ms-md-3 ms-lg-3">
        <Row className="row">
          <div className="col-md-12">
            <Headline className="p-md-0 mb-5">
              <h2 className="pb-3">Core Values that Drive Our Brand Forward</h2>
              <p className="headline-text">Our values serve as a guiding force for the company’s actions, decisions, and interactions.</p>
            </Headline>
          </div>
          <Card className="col-lg-3 col-md-12 col-lg-4 mb-lg-4 m-0 p-4">
            <div className="card">
              <div className="card-body">
              <span><RiUserStarFill size={40} /></span>
                <h5 className="card-title">Client Value</h5>
                <p className="card-text">We strive to exceed our clients expectations and deliver measurable results that positively impact their business.</p>
                
              </div>
            </div>
          </Card>
          <Card className="col-md-12  col-lg-4 mb-lg-4 m-0 p-4">
            <div className="card">
              <div className="card-body">
              <span><GiGrowth size={40} /></span>
                <h5 className="card-title">People Driven</h5>
                <p className="card-text">As a people-driven company, we prioritize the needs and well-being of our employees, customers, and communities.</p>
                
              </div>
            </div>
          </Card>
          <Card className="col-md-12  col-lg-4 mb-lg-4 m-0 p-4">
            <div className="card">
              <div className="card-body">
              <span><RiScales3Fill size={40} /></span>
                <h5 className="card-title">Accountability</h5>
                <p className="card-text">We value taking responsibility for our actions and outcomes, and holding ourselves and our employees accountable for our performance.</p>
                
              </div>
            </div>
          </Card>
          <Card className="col-md-12  col-lg-4 mb-lg-4 m-0 p-4">
            <div className="card">
              <div className="card-body">
              <span><TbTransformPointTopRight size={40} /></span>
                <h5 className="card-title">Integrity</h5>
                <p className="card-text">We place a high value on honesty, transparency, and ethical behavior maintaining a high level of trust with our employees, and other stakeholders.</p>
                
              </div>
            </div>
          </Card>
          <Card className="col-md-12  col-lg-4 mb-lg-4 m-0 p-4">
            <div className="card">
              <div className="card-body">
              <span><FcCollaboration size={40} /></span>
                <h5 className="card-title">Collaboration</h5>
                <p className="card-text">Collaboration fuels innovation and progress among us by bringing together diverse backgrounds & skill sets toward a common goal.</p>
                
              </div>
            </div>
          </Card>
        </Row>
      </div>
    </Section>
  )
}

export default CoreValues
const Section = styled.section`
  padding-top:30px;
  background-color: rgb(255 242 202);
  padding-left: 60px;
      /* tablet responsivness : smaller font size and full height  */
      @media(max-width: 599px){
        margin-left: unset; 
        padding-left: 10px;
 }
`
const Headline= styled.div`
 h2{
font-size: 2.3rem;
}
 .headline-text{
  color: #6e6e6e;
 font-size: 1.1rem;
 padding-left: 6px;
 }
`
const Card = styled.div` 
.card{
  margin: 0;
  border: none !important;
  background :#fdce9e;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
span{
  color:rgb(83, 39, 219);
 &:hover{
 color:rgba(60, 7, 219, 0.849) ;
 }
}
.card-text{
  color: #6e6e6e;
}
`
const Row = styled.div` 
      /* tablet responsivness : smaller font size and full height  */
      @media(max-width: 599px){ 
        h2{
          font-size:2rem;
        }
        padding: unset;
        margin: unset;
 }
`