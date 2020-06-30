import React from "react";

import darkWood from "../../bkgimages/dark-wood.jpg";
import lightWood from "../../bkgimages/light-wood.png";
import skybg from "../../bkgimages/sunny-background.jpg";

const ThumbnailItem = ({ detail, onClick , index}) => {
  console.log(index)
  const { 
    file, 
    title, 
    type, 
    description, 
    background, 
    temperature 
  } = detail
  return (
    <div 
      className="thumbnail" 
      key={index}
    >
      {type === "IMAGE_TEXT" ? (
        <>
          <div
            className="thumbLeft"
            style={{
              backgroundImage:
                background === "light"
                  ? `url(${lightWood})`
                  : `url(${darkWood})`,
            }}
            alt={title}
          >
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div style={{ flex: 1 }} className="thumbRight">
            <img
              className="imageThumbSmall"
              src={file}
              alt={file}
              data-index={index} 
              onClick={onClick}
            />
          </div>
        </>
      ) : (
        <div
          className="thumbweather"
          key={index}
          style={{ backgroundImage: `url(${skybg})` }}
          alt={title}
        >
          <h1>
            {temperature}
            {"\u00b0"}C
          </h1>
        </div>
      )}
    </div>
  );
};

export default ThumbnailItem;
