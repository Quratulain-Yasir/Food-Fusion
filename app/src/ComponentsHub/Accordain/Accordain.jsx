import React, { useState } from 'react'
import data from './data'

import styled from 'styled-components';
 

const Accordain = () => {
  const [selected , setSelected ] = useState(null)

  function SingleHandler(contactId){
console.log(contactId)
setSelected(contactId === selected ? null : contactId)
  }
  return (
  <Container>
    <h2>Frequently Asked Questions</h2>
    {data && data.length>=0 ? (
      data.map((dataItem=>(
        <Item onClick={()=>{SingleHandler(dataItem.id)}}>
          <Title>
          <h4>{dataItem.question}</h4>
          
          </Title>
          <Answer>
            { selected === dataItem.id ? <div><p>{dataItem.answer}</p></div> : null }
          </Answer>

        </Item>
      )
    ))
    ): <div></div>}
  </Container>
  )
}

export default Accordain

const Container = styled.div`
display: flex ;
flex-direction: column;
align-items: start;
 justify-content: center;
background :rgb(255, 246, 217);
padding: 5rem;

 h2{
  margin-bottom: 2rem;
 }
 /* mobile */
 @media(max-width: 599px){
  padding: 3rem;
 }
`
const Item = styled.div`
padding: 7px; 

`
const Title = styled.div`
padding: 3px;
color: #4d4b4b;
&:hover{
  cursor: pointer;
}

`
const Answer = styled.div`
padding: 7px;
font-size: 1.3rem;
color: #525151;
line-height: 2.3rem;
border-radius: 10px; 
` 