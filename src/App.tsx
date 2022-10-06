import { useState } from "react";
import CityPicker from "./components/cityPicker";
import { DEFAULT_CITY } from "./config/constants";
import ShowWeather from "./components/showWeather";
import useWeatherByCity from "./hooks/useWeatherByCity";
import ErrorMessage from "./components/errorMessage";
import Loading from "./components/loading";

function App() {

  const [selectedCityId, setSelectedCityId] = useState<string>(DEFAULT_CITY.id);
  const { cityWeather, isloading } = useWeatherByCity(selectedCityId);

  const handleChangeCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cityId = event.target.value;
    setSelectedCityId(cityId);
  }


  if (isloading) {
    return <Loading/>
  }


  return (
    <main>

      <CityPicker handleChange={handleChangeCity} />

      {
        (cityWeather) ? <ShowWeather weather={cityWeather} /> : <ErrorMessage/>
      }
     
    </main>
  );
}

export default App;
