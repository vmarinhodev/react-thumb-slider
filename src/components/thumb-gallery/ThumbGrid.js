import React from 'react'
import ThumbnailItem from './ThumbnailItem'


const ThumbGrid = ({ details, onClick }) => (
  <>
    {details &&
    details.length > 0 &&
    details.map((detail, index) => (
      <ThumbnailItem 
        key={detail.id}
        detail={detail}
        index={index}
        onClick={onClick}
      />
    ))}
  </>
)

export default ThumbGrid;