import React from 'react';
import styled from "styled-components";

export const Card = styled.article`
	background-color: #fff;
	border-radius: 4px;
	text-align: left;
	overflow: hidden;
`;

export const CardHeader = styled.div`
	margin: 0;
	padding: 1.5rem;
	background-color: #1c1e22;
	color: #ffe300;
	h2 {
		margin: 0;
	}
`;

export const CardBody = styled.div`
	margin: 0;
	padding: 1.5rem 1.5rem 0;
	p {
	 margin: 0 0 1.5rem;
	}
`;