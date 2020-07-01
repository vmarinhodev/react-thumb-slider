import React, { useState } from 'react'
import ThumbGrid from './ThumbGrid'
import ActiveThumbWindow from './ActiveThumbWindow'
import { useFetchDetails } from "../../hooks/useFetchDetails";

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
      <div className="left">
        <h1>{details[activeIndex].title}</h1>
        <p>{details[activeIndex].description}</p>
      </div>
    ) : null
  
  const handleClick = e => {
      const activeIndex = e.currentTarget.getAttribute('data-index')
      setActiveIndex(activeIndex)
      console.log("activeIndex - ", activeIndex)
  }

  return (
    <div className="wrapper" key="index">
      <div className="fullSlide">
        <div style={{ flex: 1}} className=" fullSlide left" >
          {renderText()}
        </div>
        <div style={{ flex: 1}} className="fullSlide right">
          {renderThumbnails()}
        </div>
      </div>
      <div className="thumbgrid">
        <ThumbGrid details={details} onClick={handleClick} />
      </div>
    </div>
  )
}

export default Thumb;