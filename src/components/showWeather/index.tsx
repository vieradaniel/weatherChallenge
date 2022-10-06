import { Weather } from "../../types";
import "./styles.css";

type Props = {
    weather: Weather
}
export default function ({ weather: { city, forecast } }: Props) {
    return <div id="showWeather">
        <p>{city.name}</p>
        <ul>
            {forecast.map((forecast, index) => (
                <li key={index}>
                    <span id="date">{forecast.date}</span> <span id="min">Min: {forecast.min} °C </span> <span id="max"> Max: {forecast.max} °C </span>
                </li>
            ))}
        </ul>

    </div>
}