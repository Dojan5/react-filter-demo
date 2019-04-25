import React from 'react';

export const CardContainer = (props) => (
	<div className="card-container">
		{props.clubs.map(card => (
			<Card key={card.id} {...card} />
		))}
	</div>
);

export const Card = (props) => (
	<div className="card">
		<h1>{props.name}</h1>
		<p><strong>Type: {props.type}</strong></p>
		<p>{props.description}</p>
	</div>
);

