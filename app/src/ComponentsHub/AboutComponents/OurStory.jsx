import React from 'react'
import styled from 'styled-components'

const OurStory = () => {
  return (
<Section>
    <div className="container">
        <div className="row">
           <div className='col-lg-12 col-md-12 mb-lg-0 mb-md-0 mb-4'>
            <h2>Discover Our Story</h2>
            <p className='mb-4'>
            At Food Fusion, we believe that food is more than just sustenance – it's an experience, a journey of flavors that brings people together. With over 10 years of culinary expertise, we’ve been at the forefront of creating innovative dining experiences that blend tradition with modernity. Our goal is simple: to bring the best of global flavors to your table, while maintaining a commitment to quality, creativity, and sustainability.
<br />
</p>
<p className='mb-4'>
Our journey started with a passion for experimenting with diverse culinary techniques and ingredients. As we explored the world’s rich and varied food cultures, we recognized that the magic of food lies in the fusion of flavors, textures, and stories. From humble beginnings, Food Fusion was born with a vision to redefine dining by fusing unique global ingredients and local traditions into unforgettable meals.
<br />
</p>
<p className='mb-4'>
Over the years, we’ve worked with a wide range of clients, from intimate gatherings to large-scale events, transforming each occasion into a celebration of flavor. Our services range from personalized catering for weddings and corporate events to innovative meal planning and recipe development for restaurants, ensuring that every meal is crafted with care, creativity, and culinary expertise.
<br />
</p>
<p className='mb-4'>
At Food Fusion, we take pride in sourcing the finest, freshest ingredients, supporting local farmers, and upholding sustainability in everything we do. Every dish we create is a reflection of our dedication to excellence, a commitment to quality, and our love for bringing people together through the joy of food.
<br />
</p> 
           </div>
        </div>
    </div>
</Section>
  )
}

export default OurStory
const Section = styled.section`

  border: none !important;
 padding: 2.5rem 0;
 h2{
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 2.2rem;
 }
 p{
    color: #777676;
    font-size:1.1rem;
    line-height: 30px;
 }
 @media (min-width: 600px) and (max-width: 899px) {
   h2{
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 2rem;
 }
 }
`