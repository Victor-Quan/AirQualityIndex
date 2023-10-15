import React, {useState} from 'react';
import './App.css';
import CitySearch from './CitySearch';
import AirQualityCard from './AirQualityCard'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [airQualityData, setAirQualityData] = useState(null);
  const [err, setErr] = useState(null);
  const getAirQual = async (city) => {
    try {
      const res = await fetch(`https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_API_TOKEN}`);
      const data = await res.json();
      console.log(data);
      if (res.ok && data.status === 'ok') {
        setAirQualityData(data.data);
        setErr(null);
      } else {
        setErr('Unable to find city. Please double check your spelling, or try another location.');
        setAirQualityData(null);
      }
    } catch (err) {
      console.error("network error:", err)
      // set err state
      setErr('Sorry, something went wrong.')
      // set air quality data to null
      setAirQualityData(null);
    }
  }
  return (
    <div className='container'>
      <h1 className='mt-5 mb-3'>Air Quality Index Checker</h1>
      <CitySearch getAirQual={getAirQual}/>
      {err && (
        <div className='alert alert-danger' role='alert'>
          {err}
        </div>
      )}
      {airQualityData && (
        // poll info
        <>
          <AirQualityCard data={airQualityData}/>
        </>
      )}
    </div>
  );
}

export default App;
