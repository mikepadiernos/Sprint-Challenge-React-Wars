import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Person from "./Person";

const People = () => {

	const [people, setPeople] = useState([]);

	const PeopleList = () => {
		axios
			.get('https://swapi.co/api/people/')
			.then(list => {
				console.log('List:', list);
				const results = setPeople(list.data.results);
			})
	};

	console.log('People:', people);

	useEffect(PeopleList, []);

	return (
		<div>
			{people.map(person => {
				return <Person name={person.name}/>
			})}
		</div>
	)



};

export default People;