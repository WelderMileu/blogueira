import styled from 'styled-components'

export const View = styled.div`
	width: 100%;
	display: block;
`;

export const Text = styled.p`
	font-size: 1.2rem;
	font-family: 'calibri', sans-serif;
`;
export const TextSmall = styled.h1`
	color: gray;
`;

export const Flex = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	position: relative;
	overflow: hidden;
`;
