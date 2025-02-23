import React from "react";
import styled from "styled-components";
import { LiaMedalSolid } from "react-icons/lia";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import { IoTimer } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";

const ChooseFoodFusion = () => {
  return (
    <Section>
      <div className="container ms-lg-3">
        <div className="col-sm-12">
          <Headline className="pb-2">
            <h2 className="position-relative d-inline-block">
              Why Choose Food Fusion
            </h2>
          </Headline>
        </div>
        <Row className="row p-lg-2  p-md-2 pt-4 mb-3">
          <Card className="col-lg-4 col-md-12 mb-lg-0 p-lg-2  p-md-2">
          <div className="card">
              <span>
                <IoDiamond size={40} />
              </span>
              <div className="card-body">
                <h5 className="card-title">Premium Value</h5>
                <p className="card-text">
                  Our various hiring models, including dedicated teams,
                  fixed-price projects, & hourly rates, provide clients with
                  flexible options while delivering premium value.
                </p>
              </div>
            </div>

            <div className="card">
              <span>
                <PiSuitcaseSimpleDuotone size={40} />
              </span>
              <div className="card-body">
                <h5 className="card-title">Industry Specific Expertise</h5>
                <p className="card-text">
                  We efficiently produce outstanding results as we have a
                  thorough understanding of the particular standards and
                  requirements of your industry.
                </p>
              </div>
            </div>
            <div className="card">
              <span>
                <FaPeopleGroup size={40} />
              </span>
              <div className="card-body">
                <h5 className="card-title">Skilled Staff</h5>
                <p className="card-text">
                  At Food Fusion, our group of specialized and business experts
                  are outfitted with profound skill, inventive thoughts, and an
                  assurance to make progress.
                </p>
              </div>
            </div>
          </Card>
          <Imageff className="col-lg-4 col-md-12 pt-2">
            <img src="/ff-15.jpg" alt="img-C-chooseff" className="img-fluid" />
          </Imageff>
          <Card className="col-lg-4 col-md-12 mb-lg-0 p-2">
            <div className="card">
              <span>
                <FaGlobe size={40} />
              </span>
              <div className="card-body">
                <h5 className="card-title">Global Expansion</h5>
                <p className="card-text">
                  We have a global presence across UK, USA and UAE, enabling us
                  to provide digital excellence with the required agility and
                  promptness for your organization.
                </p>
              </div>
            </div>
            <div className="card">
              <span>
                <IoTimer size={40} />
              </span>
              <div className="card-body">
                <h5 className="card-title">On-Time Delivery</h5>
                <p className="card-text">
                  Our teams are committed to delivering the exact range of
                  products & services we pledged, within the specified
                  timeframe, without any compromise on precision.
                </p>
              </div>
            </div>
            <div className="card">
              <span>
                <LiaMedalSolid size={40} />
              </span>
              <div className="card-body">
                <h5 className="card-title">Proven Track Record</h5>
                <p className="card-text">
                  Our team is committed to going above and beyond your
                  expectations and making sure that you are completely
                  satisfied.
                </p>
              </div>
            </div>
          </Card>
        </Row>
      </div>
    </Section>
  );
};

export default ChooseFoodFusion;
const Section = styled.section`
  background-color: rgb(255 242 202);
  padding-top: 30px;
  padding-bottom: 30px;
`;
const Headline = styled.div`
  h2 {
    font-size: 2.3rem;
    margin-left: 30px;
  }
`;
const Card = styled.div` 
  .card {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    span {
      padding-top: 20px;
      padding-left: 10px;
    }
  }
  span {
    color: rgb(83, 39, 219);
    &:hover {
      color: rgba(60, 7, 219, 0.849);
    }
  }
  .card-text {
    color: #6e6e6e;
  }
`;
const Imageff = styled.div`
  .img-fluid {
    width: 100%;
    height: 97%;
  }
    @media (max-width: 899px) {
  font-size: 17rem;
  }
  @media (max-width: 599px) {
font-size: 17rem;
  }
`;
const Row = styled.div`
  margin-left: 30px; 
width:90vw;
  @media (max-width: 899px) {
    margin-left: unset;
    width: unset;
  }
  @media (max-width: 599px) {
    margin-left: unset;
    width: unset;
  }
`;
