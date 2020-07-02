import React, { useState } from 'react'
import ThumbGrid from './ThumbGrid'
import ActiveThumbWindow from './ActiveThumbWindow'
import { useFetchDetails } from "../../hooks/useFetchDetails";

import darkWood from "../../bkgimages/dark-wood.jpg";
import lightWood from "../../bkgimages/light-wood.png";

const Thumb = () => {
  const { details, loading, error } = useFetchDetails();
  const [activeIndex, setActiveIndex] = useState(0)
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

  const renderThumbnails = () => 
    details.length ? (
      <>
        <ActiveThumbWindow  activeThumbnail={details[activeIndex]}/>
      </>
    ) : null

  const renderText = () => 
    details.length ? (
      <div className="left"
      style={{
        backgroundImage:
        details[activeIndex].background === "light"
            ? `url(${lightWood})`
            : `url(${darkWood})`,
      }}>
        
        <div className="left content">
          <h1>{details[activeIndex].title}</h1>
          <p>{details[activeIndex].description}</p>
        </div>

      </div>
    ) : null
  
  const handleClick = (e) => {
    
      const activeIndex = e.currentTarget.getAttribute('data-index')
      
      function swap(details, activeIndex, to){
        let temp = details[activeIndex]

        details[activeIndex] = details[to]
        details[to] = temp
      }
      swap(details, 0, activeIndex)

      setActiveIndex(activeIndex)
      
  }

  return (
    <div className="wrapper" key="index">
      <div className="fullSlide">
          {renderText()}
          {renderThumbnails()}
      </div>
      <div className="thumbgrid">
        <ThumbGrid details={details} onClick={handleClick} />
      </div>
    </div>
  )
}

export default Thumb;