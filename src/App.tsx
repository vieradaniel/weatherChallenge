import { useState } from "react";
import CityPicker from "./components/cityPicker";
import ErrorMessage from "./components/errorMessage";
import Loading from "./components/loading";
import ShowWeather from "./components/showWeather";
import { DEFAULT_CITY } from "./config/constants";
import useWeatherByCity from "./hooks/useWeatherByCity";

function App() {
	const [selectedCityId, setSelectedCityId] = useState<string>(DEFAULT_CITY.id);
	const { cityWeather, isloading } = useWeatherByCity(selectedCityId);

	const handleChangeCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const cityId = event.target.value;
		setSelectedCityId(cityId);
	};

	if (isloading) {
		return <Loading />;
	}

	return (
		<main>
			<CityPicker handleChange={handleChangeCity} value={selectedCityId} />
			<hr />
			{cityWeather ? <ShowWeather weather={cityWeather} /> : <ErrorMessage />}
		</main>
	);
}

export default App;
