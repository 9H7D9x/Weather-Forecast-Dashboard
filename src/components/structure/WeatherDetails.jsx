import React from 'react';
import CityDetails from '../base/CityDetails';
import WeatherMetrics from '../base/WeatherMetrics';

const WeatherDetails = ({ citySearchData, unit }) => {
  return (
    <div className="weather-details-container">
        {/* details */}
        <CityDetails citySearchData={citySearchData} />
         {/* metrices */}
         <WeatherMetrics citySearchData={citySearchData} unit={unit}/>
     </div>
                        
  );
};

export default WeatherDetails;