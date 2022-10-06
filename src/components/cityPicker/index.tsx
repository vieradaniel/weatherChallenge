import { ChangeEventHandler } from "react";
import useCities from "../../hooks/useCities"

type props = {
    handleChange: ChangeEventHandler
}

export default function ({ handleChange }: props) {

    const { cities } = useCities();

    return (

        <select onChange={handleChange}>
            {
                cities.map(({ id, name }) => (
                    <option key={id} value={id}>{name}</option>
                ))
            }
        </select>
    );
}