 
import styled from 'styled-components'

const HeroSection1 = () => {
  return (
 
      <div className="container-fluid mb-5">
        <div className="row"> 
          <Topbanner className="col-lg-5 col-md-6  position-relative overflow-hidden"> 
                    <div className="environment-overlay"></div>
           </Topbanner>  
        </div>
      </div>
  
  )
}

export default HeroSection1

const Topbanner = styled.div`
    background-color: skyblue;
    width: 100%; 
    background: url('/hero-section-bg.jpg') no-repeat center;
    background-size: cover;
    padding: 16.875rem 0 9.375rem; 
 .environment-overlay::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
}
`

 