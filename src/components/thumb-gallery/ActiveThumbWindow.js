import React from 'react'


const ActiveThumbWindow = ({ activeThumbnail }) => {

  console.log(activeThumbnail)
  return (
    <div className="activethumb">
      <img src={activeThumbnail.file} alt={activeThumbnail.title}/>
    </div>
  )
}

export default ActiveThumbWindow;