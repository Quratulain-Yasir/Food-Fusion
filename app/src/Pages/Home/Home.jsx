 
 import Navbar from '../../ComponentsHub/Navbar/Navbar' 
import Footer from '../../ComponentsHub/Footer'
import Enviroment from '../../ComponentsHub/HomeComponents/Enviroment'
import FirstH from '../../ComponentsHub/HomeComponents/FirstH'
import BestSellers from '../../ComponentsHub/HomeComponents/BestSellers/BestSellers'
import AboutFood from '../../ComponentsHub/HomeComponents/AboutFood'
import TabFeild from '../../ComponentsHub/HomeComponents/custom-tabs/TabFeild'
import HeroSection1 from '../../ComponentsHub/HomeComponents/HeroSection1'
import ActiveSlider from '../../ComponentsHub/ActiveSlider'
 
 

 

const Home = () => {
  return (
    <>
    <Navbar />
    <HeroSection1 />
    <FirstH title="You order , we handle the rest" src="/ff-H_2.png" cardtitle="Experience the best of fusion cuisine" cardtext=" Whether it's Asian spices with Latin twists or Mediterranean ingredients reimagined with global influences , every card brings something new. As you flip through, discover how we combine fresh ingredients and creative techniques to offer you a one-of-a-kind dining experience. Every bite is a reflection of our passion for blending the old and the new in perfect harmony."  /> 
   <Enviroment />
   <BestSellers />
   <AboutFood /> 
   <TabFeild />  
   <ActiveSlider />
   <FirstH title="Take your office out to lunch" src="/friend-gathering.jpg" cardtitle="foodfusion for business" cardtext="Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more."  /> 
      <Footer />
   
    </>
  )
}

export default Home
