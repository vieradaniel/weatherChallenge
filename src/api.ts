import { City } from "./types";

const API_KEY = '550fccfa8a7cb9b36eb69ea2588395c0';


export type Weather = {
    city:{
        id:string;
        name:string;
    },
    forecast:{
        date:string;
        min:number;
        max:number;
    }[]
}

export const api = {
  weather : {
    fetch : async (city:City):Promise <Weather> => {
      
      const request = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}`);      
      const response = await request.json(); 
      const {0:first,8:second,16: third,24:fourth,32:fifth} = response.list;

        return {
            city:{
                id:city.id,
                name:city.name,
            },
            forecast:[first,second,third,fourth,fifth].map(( forecast ) =>(
                {
                    date: new Date(forecast.dt*1000).toLocaleDateString('es-AR'),
                    min:  Math.round(forecast.main.temp_min-273.15) ,
                    max:  Math.round(forecast.main.temp_max-273.15) ,
                })
            )
        }
        
    }

  }
}
        
