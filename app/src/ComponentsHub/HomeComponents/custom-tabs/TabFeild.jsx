import React from 'react'
import Tab from './Tab'
import ThirdTab from './ThirdTab'
import SecondTab from './SecondTab'
import FirstTab from './FirstTab'
 

const TabFeild = () => {
  const tabs = [
    {
      label : 'Family Gathering' ,
      content : <FirstTab /> , 
    } , 
    {
      label : 'Wedding Ceremony Four-Tier Cake' ,
      content : <SecondTab /> , 
    } , 
    {
      label : 'Corporate Event' ,
      content :  <ThirdTab />  , 
    } 
  ]

  function handleChange(currentTabIndex){
console.log(currentTabIndex)
  }
  return ( 
    <Tab tabContent={tabs} onChange={handleChange} />
  )
}

export default TabFeild
