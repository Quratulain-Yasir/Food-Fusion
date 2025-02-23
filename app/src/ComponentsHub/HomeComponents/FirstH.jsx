 import styled from 'styled-components';

function FirstH({ src , title , cardtitle , cardtext }) {
  return (
    <Container className='container-fluid m-0 p-0 pb-5 pt-5'>
     <div className='col-lg-12 col-md-12 col-sm-12'>
      <h2>{title}</h2>
          <FeaturedImage className='col-lg-12 col-md-7'>
           <img src={src} className=" img-size img-fluid"  />
           <Card className="card card-size col-md-5 rounded-4">
  <div className="card-body">
    <h5 className="card-title">{cardtitle}</h5>
    <p className="card-text">{cardtext}</p>
    <button className="btn">Get Started</button>
  </div>
</Card>
          </FeaturedImage>
    </div>
    </Container>  
  )
}

export default FirstH;
const Container = styled.div`
background-color:rgb(255, 246, 217);
  h2{
    padding-top: 30px;
    padding-left: 30px;
    margin-bottom: 30px;
    align-items: center; 
  }
  @media (min-width: 600px) and (max-width: 899px) {
  h2{
    font-size: 1.145rem; 
  }  
}
`
const FeaturedImage = styled.div` 
   width:100vw;
  .img-size{
    width:100%;
    height: 65vh;
  }
  .card{
    color: #6e6e6e;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  }
  .card-size{
    margin-left: 70px;
    width: 38rem;
    margin-top: -80px;
  }
         /* tablet responsivness : smaller font size and full height  */
         @media (min-width: 600px) and (max-width: 899px) {
          width:100vw;
  margin-top: 10px;
  .card-size{
    margin-left: 19px;
    height: 23rem;
    width:26rem;
    margin-top: -85px;
  } 
  .img-size{
    width:100%;
    height: 50%;
  }
 }
 @media (max-width: 599px) {
  .card-size{
    margin-left: 10px;
    font-size: 0.8rem;
    width:16rem;
    margin-top: -60px;
  }
  .img-size{
    width: 100%;
    height: 50%;
  }
 }
`
const Card = styled.div`
  background :#f1c08e;
  border: none !important;
  .card-title{
    color: rgb(57, 4, 216);
    font-size: 1.5rem;
  }
button{
  background-color:rgb(57, 4, 216);
  color: #FEC182;
  &:hover{
    background-color: rgb(83, 39, 217);
    color: #FEC182;
  }
  &:active {
  background-color: rgb(83, 39, 217) !important; 
  border-color:rgb(83, 39, 217) !important; 
  color: #FEC182 !important; 
}
}
@media (max-width: 599px) {
  .card-title{
    color: rgb(57, 4, 216);
    font-size: 1.3rem;
  }
}
`