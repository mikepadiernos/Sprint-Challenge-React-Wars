import React from 'react';

const Person = props => {
	return (
		<article className='card'>
			<div className='card-header'>
				<h2 className='person-name'>
					{props.name}
				</h2>
			</div>
			<div className='card-body'>
				<p> </p>
				<p> </p>
				<p> </p>
			</div>
		</article>
	)
};

export default Person;