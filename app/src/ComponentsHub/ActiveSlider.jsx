import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";
import styled from "styled-components";

const ActiveSlider = () => {
  return (
    <Container className="flex items-center justify-center flex-col">
                  <div className="col-12">
              <div className="headline text-center">
                <h2 className="pt-5 pb-5 position-relative d-inline-block fw-bold"  style={{ fontSize: "36px", letterSpacing: "7px" , lineHeight: "3rem" }}>
                Step Inside FoodFusion
                </h2>
              </div>
            </div>
      <Swiper
      breakpoints={{
        340: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
        freeMode={true}
        pagination={{
          clickable: true, 
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <CardContainer> 
            <BackgroundDiv bgImage={item.backgroundImage} />
            <Overlay className="overlay" />
            <ContentContainer>
        <Icon className="icon">
          <item.icon />
        </Icon>
        <Title>{item.title}</Title>
        <Paragraph>{item.content}</Paragraph>
      </ContentContainer>
      <ArrowIcon className="arrow" />
            </CardContainer> 
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ActiveSlider;

const Container = styled.div` 
   padding-top: 5rem;
  margin-bottom: 3rem; 
  .swiper-pagination-bullet-active {
background: rgb(57, 4, 216);
}
` 
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 5rem;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
  height: 150px;
  width: 215px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .overlay {
      opacity: 0.5;
    }

    .icon {
      color: rgb(57, 4, 216); /* Hover color */
    }

    .arrow {
      color: rgb(57, 4, 216); /* Hover color */
      transform: rotate(45deg);
      transition: transform 0.1s ease;
    }
  }

  @media (min-width: 1024px) {
    height: 400px;
    width: 350px;
  }
` 


const BackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
` 
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.1;
  z-index: 1;
` 
const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 2;
`
const Icon = styled.div`
  font-size: 32px;
  color: rgb(57, 4, 216); /* Default color */
  transition: color 0.2s ease;
` 

const Title = styled.h1`
  font-size: 1.25rem; /* For small screens */
  @media (min-width: 1024px) {
    font-size: 1.5rem; /* For large screens */
  }
` 

const Paragraph = styled.p`
  font-size: 1rem;
  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
` 
const ArrowIcon = styled(RxArrowTopRight)`
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  font-size: 35px;
  color: white;
  transition: color 0.2s ease, transform 0.1s ease;
  z-index: 2;
  @media (max-width: 768px) { 
   font-size: 20px;
}
` 