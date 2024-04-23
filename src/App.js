import React, { useEffect, useState } from 'react'
import Icon from "react-icons-kit"
import {search} from 'react-icons-kit/feather/search'
import { useDispatch } from 'react-redux';
import { getCityData } from './Store/Slices/WeatherSlice';


const App = () => {
  //City state
  const [city,setCity]=useState('gurugram');

  //unit state
  const [unit,setUnit]=useState('metric'); //metric=c || imperial=f

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
          dispatch();
        }
      // console.log(res)
    })
  }

  //intial render
  useEffect(()=>{
    fetchData();
  },[])


  function handleCitySearch(e){
    e.preventDefault();
  }

  return (
    <div className="background">
      <div className="box">
        {/* City Search*/}
        WEATHER FORECAST DASHBOARD
        <form autoComplete="off" onSubmit={handleCitySearch}>
          <label>
            <Icon icon={search} size={20} />
          </label>
          <input 
          type="text"
          className='city-input'
          placeholder="Enter City Name"
          required
          vlue={city}
          onChange={(e)=>setCity(e.target.value)}
          ></input>
          <button type="submit">Go</button>
        </form>
      </div>
    </div>
  )
}

export default App

// import React, { useEffect, useState } from "react";


// import SearchBar from './container/SearchBar';

// function App() {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   console.log(filteredData);

//   useEffect(()=>{
//     fetchData();
//   },[])

  
//   async function fetchData(){
//     try{
//         const response= await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//         setData(data);
//     }
//     catch(error){
//         console.error('Error fetching data:', error);
//     }
    
//   }
  
//    function handleSearch(query){

//     const filtered = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
//     setFilteredData(filtered);
//    }
   
//   return (
//     <div>
//      <SearchBar onSearch={handleSearch}/>
//      {filteredData.map((filter ,id)=>
//      <div key={filter.id}>{filter.name}</div>)}

//     </div>
//   );
// }

// export default App;
