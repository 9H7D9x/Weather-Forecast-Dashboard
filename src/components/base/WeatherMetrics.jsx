import React from 'react'
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { droplet } from "react-icons-kit/feather/droplet";
import { wind } from "react-icons-kit/feather/wind";
import Icon from "react-icons-kit"


const WeatherMetrics = ({ citySearchData, unit }) => {
  return (
    <div className="metrices">
        {/* feels like */}
        <h4>
        Feels like {citySearchData.data.main.feels_like}
        &deg;C
        </h4>

         {/* min max temp */}
        <div className="key-value-box">
            <div className="key">
             <Icon
                icon={arrowUp}
                size={20}
                className="icon"
            />
            <span className="value">
                {citySearchData.data.main.temp_max}
                &deg;C
             </span>
            </div>
            <div className="key">
            <Icon
                icon={arrowDown}
                size={20}
                className="icon"
             />
            <span className="value">
                {citySearchData.data.main.temp_min}
                 &deg;C
             </span>
        </div>
      </div>

         {/* humidity */}
      <div className="key-value-box">
        <div className="key">
           <Icon
                icon={droplet}
                size={20}
                className="icon"
           />
           <span>Humidity</span>
        </div>
        <div className="value">
            <span>
                {citySearchData.data.main.humidity}%
            </span>
        </div>
        </div>

          {/* wind */}
          <div className="key-value-box">
          <div className="key">
          <Icon icon={wind} size={20} className="icon" />
          <span>Wind</span>
          </div>
          <div className="value">
          <span>{citySearchData.data.wind.speed}kph</span>
          </div>
        </div>
         {/* */}
        </div>
                        
  )
}

export default WeatherMetrics