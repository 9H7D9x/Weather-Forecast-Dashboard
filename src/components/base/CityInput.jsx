import React from 'react'

const CityInput = ({ city, setCity }) => {
  return (
    <input
      type="text"
      className="city-input"
      placeholder="Enter City Name"
      required
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
  )
}

export default CityInput