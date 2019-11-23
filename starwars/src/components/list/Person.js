import React from 'react';
import { Card, CardHeader, CardBody } from '../presentation/Card';

const Person = props => {
	return (
		<Card>
			<CardHeader>
				<h2 className='person-name'>
					{props.name}
				</h2>
			</CardHeader>
			<CardBody>
				<p><b>Birth Year:</b> {props.birth}</p>
				<p><b>Height:</b> {props.height}</p>
				<p><b>Skin Color:</b> {props.skin}</p>
				<p><b>Hair Color:</b> {props.hair}</p>
				<p><b>Eye Color:</b> {props.eye}</p>
			</CardBody>
		</Card>
	)
};

export default Person;