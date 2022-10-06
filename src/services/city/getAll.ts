import cities from "../../data/cities.json"
import { City } from "../../types";

export async function getAll() : Promise<Array<City>>{
    return cities;
}