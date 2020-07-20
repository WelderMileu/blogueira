import styled from 'styled-components'

export const View = styled.div`
	position: ${ props => props.position } !important;
	padding: ${ props => props.padding };
	grid-column: ${ props => props.gridPosition };
	margin-left: ${ props => props.ml };
	width: 100%;
	display: block;
	z-index: ${ props => props.index };
`;

export const Text = styled.p`
	font-size: 1.2rem;
	font-family: 'calibri', sans-serif;
	margin-top: ${ props => props.mt };
	color: ${ props => props.color }
`;

export const TextSmall = styled.h1`
	font-size: 2rem;
	color: ${ props => props.color };
	margin-top: ${ props => props.mt };
`

export const Grid = styled.div`
	width: 100%;
	height: ${ props => props.height };
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	position: relative;
	overflow: hidden;
`;

