/* eslint-disable react/prop-types */
import { useId } from "react";
import { useFilters } from "../hooks";
import "./Filters.css";

export function Filters() {
	const { filters, setFilters } = useFilters();
	const minPriceFilterId = useId();
	const categoryFilterId = useId();

	const handleChangeMinPrice = () => {
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
					<span>${filters.minPrice}</span>
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
