import React from 'react';

export const FilterList = (props) => (
	<div className="filter-container">
		<select onChange={props.onChange}>
			{props.filters.map((filter, index) => (
				<option key={index} value={filter}>{filter}</option>
			))}
		</select>
	</div>
);