import React from 'react'
import styled from 'styled-components'
const Skill = () => {
  return (
    <Container>
      <SkillBox>
<h5></h5>
<p></p>

      </SkillBox>
    </Container>
  )
}

export default Skill

const Container = styled.section`
 height: 200px;
 
position:relative;
 
`
const SkillBox = styled.div`
background-color:  yellow;
text-align:center;
 padding: 60px 50px;
 border-radius: 64px;
 margin-top: -60px;
 h5{
    font-size:45px;
    font-weight: 700;
 }
 p{
    font-size:18px;
    line-height: 1.5rem;
    margin: 14px 0 75px 0;
    letter-spacing: 0.8px;
color:black;
 }
`
