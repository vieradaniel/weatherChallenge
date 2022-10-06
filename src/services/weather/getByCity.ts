import { API_DOMIAN, API_KEY } from "../../config/constants";
import { City, Weather } from "../../types";

export default async function getWeatherByCity({ id, name, lat, lon }: City): Promise<Weather> {

    const data = await fetch(`${API_DOMIAN}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then(response => response.json());


    const { 0: first, 8: second, 16: third, 24: fourth, 32: fifth } = data.list;


    return {
        city: {
            id,
            name,
        },
        forecast: [first, second, third, fourth, fifth].map((forecast) => (
            {
                date: new Date(forecast.dt * 1000).toLocaleDateString('es-AR'),
                min: Math.round(forecast.main.temp_min - 273.15),
                max: Math.round(forecast.main.temp_max - 273.15),
            })
        )
    }

}