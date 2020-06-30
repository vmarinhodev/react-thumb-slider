import React from 'react'
import { useFetchDetails } from '../../hooks/useFetchDetails'
import skybg from '../../bkgimages/sunny-background.jpg'

const WeatherItem = () => {
  const { details, loading, error } = useFetchDetails()
  
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
    return (
        <>
          {
            details &&
            details.length > 0 &&
            details.map((detail, index) => 
              <div className="thumbnail" key={index}>
                {detail.type === "WEATHER" ? (
                  <div 
                    className="bgl" 
                    style={{backgroundImage: `url(${skybg})` }}
                    alt={detail.title}
                  >
                    weather item
                    {console.log('details weather - ', detail.type)}
                  </div>
                ) : (<div>testing</div>)}
              </div>
            )
          }
        </>
    )
}

export default WeatherItem;