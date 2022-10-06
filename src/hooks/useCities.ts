import { useEffect, useState } from "react";
import { getAll } from "../services/city/getAll";
import { City } from "../types";


export default function useCities() {

    const [isloading, setIsLoading] = useState<boolean>(false);
    const [cities, setCities] = useState<Array<City>>([]);

    useEffect(()=>{
        setIsLoading(true);
        getAll()
        .then(cities => setCities(cities))
        .catch(console.log)
        .finally(()=> setIsLoading(false));
    }, []);


    return {
        cities,
        isloading
    }

}
