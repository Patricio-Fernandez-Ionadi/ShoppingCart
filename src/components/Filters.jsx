/* eslint-disable react/prop-types */
import { useId, useState } from "react";
import { useFilters } from "../hooks";
import "./Filters.css";

export function Filters() {
	const { filters, setFilters } = useFilters();

	const [minPrice, setMinPrice] = useState(0);

	const minPriceFilterId = useId();
	const categoryFilterId = useId();

	const handleChangeMinPrice = () => {
		setMinPrice(event.target.value);
		setFilters((prevState) => ({
			...prevState,
			minPrice: event.target.value,
		}));
	};

	const hanldleChangeCategory = () => {
		setFilters((prevState) => ({
			...prevState,
			category: event.target.value,
		}));
	};

	return (
		<>
			<section className="filters">
				<div>
					<label htmlFor="price">Precio a partir de:</label>
					<input
						id={minPriceFilterId}
						max={1000}
						min={0}
						name="price"
						onChange={handleChangeMinPrice}
						type="range"
						value={filters.minPrice}
					/>
					<span>${minPrice}</span>
				</div>

				<div>
					<label htmlFor="category">Categoria</label>
					<select
						name="category"
						id={categoryFilterId}
						onChange={hanldleChangeCategory}
					>
						<option value="all">Todas</option>
						<option value="laptops">Prtatiles</option>
						<option value="smartphones">Celulares</option>
					</select>
				</div>
			</section>
		</>
	);
}
