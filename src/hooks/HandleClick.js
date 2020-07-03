import {useState} from 'react'

export const handleClick = (e) => {


  const [details, setDetails] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0)
    
  activeIndex = e.currentTarget.getAttribute('data-index')
  
  function swap(details, activeIndex, to){
    let temp = details[activeIndex]
    details[activeIndex] = details[to]
    details[to] = temp
    console.log('temp', temp)
  }
  swap(details, 0, activeIndex)

  setActiveIndex(activeIndex)
  //console.log("detailsIndexArray - ", (Array.from(details)))
  console.log("activeIndexArray - ", (Array.from(activeIndex)))
  
  console.log("activeIndex - ", activeIndex)
  //console.log("element - ", e)
  console.log("details[activeIndex] - ", details )
  
}
