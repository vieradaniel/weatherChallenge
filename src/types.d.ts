export type City = {
    id: string;
    name: string;
    lon: number;
    lat: number;
}

export type Forecast = {
    date: string;
    min: number;
    max: number;
}

export type Weather = {
    city: {
        id: string;
        name: string;
    },
    forecast: Array<Forecast>
}


