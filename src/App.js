import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getCityData,get5DaysForecast } from './Store/Slices/WeatherSlice';
import { SphereSpinner } from "react-spinners-kit";
import SearchForm from './components/structure/SearchForm';
import WeatherDetails from './components/structure/WeatherDetails';
import ExtendedForecast from "./components/structure/ExtendedForecast";


const App = () => {
  // redux state
  const {
    citySearchLoading,
    citySearchData,
    forecastLoading,
    forecastData,
    forecastError,
  } = useSelector((state) => state.weather);

  // main loadings state
  const [loadings, setLoadings] = useState(true);

   // check if any of redux loading state is still true
  const allLoadings = [citySearchLoading, forecastLoading];

  useEffect(() => {
    const isAnyChildLoading = allLoadings.some((state) => state);
    setLoadings(isAnyChildLoading);
  }, [allLoadings]);

  //City state
  const [city,setCity]=useState('gurugram');

  //unit state
  const [unit,setUnit]=useState('metric'); //metric=c || imperial=f

  const toggleUnit = () => {
    setLoadings(true);
    setUnit(unit === "metric" ? "imperial" : "metric");
  };


  //dispatch 
  const dispatch= useDispatch();

 // fetch data
  const fetchData=()=>{
    dispatch(
      getCityData({
        city,
        unit,
      })
    ).then((res)=>{
        if(!res.payload.error){
          dispatch(
            get5DaysForecast({
              lat: res.payload.data.coord.lat,
              lon: res.payload.data.coord.lon,
              unit,
            })
          );
        }
      // console.log(res)
    })
  }

  //intial render
  useEffect(()=>{
    fetchData();
  },[unit])


  const handleCitySearch=(e)=>{
    e.preventDefault();
    setLoadings(true);
    fetchData();
  }

  // function to filter forecast data based on the time of the first object
  const filterForecastByFirstObjTime = (forecastData) => {
    if (!forecastData) {
      return [];
    }

    const firstObjTime = forecastData[0].dt_txt.split(" ")[1];
    return forecastData.filter((data) => data.dt_txt.endsWith(firstObjTime));
  };

  const filteredForecast = filterForecastByFirstObjTime(forecastData?.list);

  return (
    <div className="background">
      <div className="box">
        WEATHER FORECAST DASHBOARD
        {/* City Search*/}
         <SearchForm handleCitySearch={handleCitySearch} city={city} setCity={setCity}/>

         {/* current weather details box */}
        <div className="current-weather-details-box">
            {/* header */}
          <div className="details-box-header">
            {/* heading */}
            <h4>Current Weather</h4>

            {/* switch */}
            <div className="switch" onClick={toggleUnit}>
              <div
                className={`switch-toggle ${unit === "metric" ? "c" : "f"}`}
              ></div>
              <span className="c">C</span>
              <span className="f">F</span>
            </div>
          </div>
          {loadings ? (
            <div className="loader">
              <SphereSpinner loadings={loadings} color="#2fa5ed" size={20} />
            </div>
          ) : (
            <>
              {citySearchData && citySearchData.error ? (
                <div className="error-msg">{citySearchData.error}</div>
              ) : (
                <>
                  {forecastError ? (
                    <div className="error-msg">{forecastError}</div>
                  ) : (
                    <>
                      {citySearchData && citySearchData.data ? (
                         <WeatherDetails citySearchData={citySearchData} unit={unit} />
                      ) : (
                        <div className="error-msg">No Data Found</div>
                      )}


                      {/* extended forecastData */}
                      <h4 className="extended-forecast-heading">
                         5 Days Forecast
                      </h4>
                      {filteredForecast.length > 0 ? (
                         <ExtendedForecast filteredForecast={filteredForecast} />
                      ) : (
                        <div className="error-msg">No Data Found</div>
                      )}
                       </>
                  )}
                </>
              )}
            </>
          )}
          
        </div>
        
      </div>
    </div>
  )
}

export default App

