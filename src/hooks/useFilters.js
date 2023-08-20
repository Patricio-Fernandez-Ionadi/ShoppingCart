import { useContext } from "react";
import { FiltersContext } from "../context";

export function useFilters() {
	const { filters, setFilters } = useContext(FiltersContext);

	const filterProducts = (products) => {
		return products.filter((prod) => {
			return (
				prod.price >= filters.minPrice &&
				(filters.category === "all" || prod.category === filters.category)
			);
		});
	};

	return { filters, filterProducts, setFilters };
}