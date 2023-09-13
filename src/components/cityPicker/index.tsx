import { ChangeEventHandler } from "react";
import useCities from "../../hooks/useCities";
import "./styles.css";

type props = {
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  value: string;
};

export default function CityPicker({ handleChange, value }: props) {
	const { cities } = useCities();

	return (
		<div id="cityPicker">
			<select onChange={handleChange} value={value}>
				{cities.map(({ id, name }) => (
					<option key={id} value={id}>
						{name}
					</option>
				))}
			</select>
		</div>
	);
}
