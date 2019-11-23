import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Person from './Person';
import { Cards, CardsContainer } from '../presentation/Cards'

const People = () => {

	const [people, setPeople] = useState([]);

	const PeopleList = () => {
		axios
			.get('https://swapi.co/api/people/')
			.then(list => {
				console.log('List:', list);
				setPeople(list.data.results);
			})
	};

	console.log('People:', people);

	useEffect(PeopleList, []);

	return (
		<CardsContainer>
			<Cards>
				{people.map(person => {
					return <Person
						name={person.name}
						birth={person.birth_year}
						hair={person.hair_color}
						eye={person.eye_color}
						skin={person.skin_color}
						height={person.height}
					/>
				})}
			</Cards>
		</CardsContainer>
	)
};

export default People;