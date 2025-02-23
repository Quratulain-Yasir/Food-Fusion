import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CelebratingSuccess = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    // Counter function using React state
    function counter(start, end, duration, setCount) {
      let current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range));

      const timer = setInterval(() => {
        current += increment;
        setCount(current);
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
    }

    // Call the counter function for each value
    counter(0, 10, 1000, setCount1);
    counter(0, 1500, 3000, setCount2);
    counter(0, 300, 3000, setCount3);
    counter(0, 10, 3000, setCount4);
  }, []);

  return (
    <Container>
      <div className="container">
   <div className="row mt-3 p-3">
   <h2>Celebrating Success</h2>
   <p className='heading-para'>A timeline of the major milestones that have shaped our company’s growth and development.</p>
   </div>
        <div className="row text-center">
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
<h2>
    <span>{count1}</span>+
</h2>
<p>Years of Experience</p>
            </div>
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
<h2>
    <span>{count2}</span>+
</h2>
<p>Happy Clients</p>
            </div>
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
<h2>
    <span>{count3}</span>+
</h2>
<p>Employees</p>
            </div>
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
<h2>
    <span>{count4}</span>+
</h2>
<p>Branches Around the World</p>
            </div>
        </div>
      </div>
    </Container>
  )
}

export default CelebratingSuccess
const Container = styled.section`
 background-color:rgb(255, 246, 217);
 
padding: 2.5rem 0;
.heading-para{
    
        color: rgb(143, 142, 142);
        font-size: 1rem;
         text-transform: lowercase;

}
 p {
    color: rgb(83, 39, 217);
    text-transform: uppercase;
}
`