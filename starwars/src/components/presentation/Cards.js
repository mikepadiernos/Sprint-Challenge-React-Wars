import React from 'react';
import styled from "styled-components";

export const CardsContainer = styled.div`
	padding: 0 2rem;
`;

export const Cards = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-gap: 1rem;
	padding: 2rem;
`;
