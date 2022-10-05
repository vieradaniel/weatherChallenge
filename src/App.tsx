import { useEffect, useState } from "react";
import logo from "./logo.svg";
import { api, Weather } from "./api";
import { City } from "./types";



const CITIES ={
mdq:   
  {
    id:'mdq',
    name:'Mar Del Plata',
    lat:-38.0175666,
    lon:-57.6005341,
  },
cordoba: 
  {
    id:'cordoba',
    name:'Cordoba',
    lat:-31.399084,
    lon:-63.0078319,
  }
}


function App() {
  const [status, setStatus] = useState<"pending" | "resolved">("pending");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [ city, setCity ] = useState < City >(CITIES['mdq']);

  const handleChangeCity=(event: React.ChangeEvent<HTMLSelectElement>)=>{

    setCity(CITIES[event.target.value as keyof typeof CITIES]);
  }


  useEffect(() => {
    api.weather.fetch(city).then(weather =>{
      setWeather(weather);
      setStatus('resolved')
    });
  }, [city]);

  if (status === "pending") {
    return <div>cargando...</div>;
  }

  if (!weather) {
    return <div>la ciudad no existe</div>;
  }

  return (
    <main>
      <select onChange={ handleChangeCity } value = {city.id}>
        {
          Object.values(CITIES).map((city)=>(
            <option key={city.id} value={city.id}>{city.name}</option>
          ))
        }
      </select>

      <div>{weather.city.name}</div>
      <ul>
        {weather.forecast.map((forecast, index) => (
          <li key={index}>
            {forecast.date} min: {forecast.min} °C max: {forecast.max} °C
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
