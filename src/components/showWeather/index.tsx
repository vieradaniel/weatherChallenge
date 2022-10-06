import { Weather } from "../../types"

type Props = {
    weather: Weather
}
export default function ({ weather: { city, forecast } }: Props) {
    return <>
        <div>{city.name}</div>
        <ul>
            {forecast.map((forecast, index) => (
                <li key={index}>
                    {forecast.date} min: {forecast.min} °C max: {forecast.max} °C
                </li>
            ))}
        </ul>
    </>
}