/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiltersContext } from ".";

// Proveedor
export function FiltersProvider({ children }) {
	const [filters, setFilters] = useState({
		category: "all",
		minPrice: 0,
	});

	return (
		<FiltersContext.Provider
			value={{
				filters,
				setFilters,
			}}
		>
			{children}
		</FiltersContext.Provider>
	);
}
