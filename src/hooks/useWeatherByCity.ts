import { useEffect, useMemo, useState } from "react";
import { DEFAULT_CITY } from "../config/constants";
import getWeatherByCity from "../services/weather/getByCity";
import { City, Weather } from "../types";
import useCities from "./useCities";

export default function useWeatherByCity(cityId:string) {

    
    const [selectedCity, setSelectedCity] = useState<City>(DEFAULT_CITY);

    const {cities, isloading : areCitiesLoading} = useCities();

    const memoCities = useMemo(()=> (areCitiesLoading) ? [] : cities, [areCitiesLoading]);


    const [cityWeather, setCityWeather] = useState<Weather | undefined>(undefined);

    const [isloading, setIsLoading] = useState<boolean>(false);

    useEffect(()=> {
        const matchedCity = memoCities.find((city: City) => city.id === cityId);
        setSelectedCity(matchedCity ?? DEFAULT_CITY);
    },[cityId]);
    

    useEffect(()=>{
        setIsLoading(true);
        getWeatherByCity(selectedCity).
        then((weather: Weather) => {
             setCityWeather(weather);
        })
        .catch(console.error)
        .finally(()=> setIsLoading(false));
    }, [selectedCity]);


    return {
        cityWeather,
        isloading
    }

}