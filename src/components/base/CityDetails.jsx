import React from 'react'

const CityDetails = ({ citySearchData }) => {
  return (
    <div className="details">
    <h4 className="city-name">
      {citySearchData.data.name}
    </h4>

    <div className="icon-and-temp">
      <img
        src={`https://openweathermap.org/img/wn/${citySearchData.data.weather[0].icon}@2x.png`}
        alt="icon"
      />
      <h1>{citySearchData.data.main.temp}&deg;</h1>
    </div>

    <h4 className="description">
      {citySearchData.data.weather[0].description}
      </h4>
  </div>
  )
}

export default CityDetails