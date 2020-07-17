import styled from 'styled-components'

export const NavContainer = styled.ul`
	display: flex;
	list-style: none;
	width: 100%;
`

export const NavItens = styled.li`
	padding: 10px;
	color: ${ props => props.color };
	cursor: pointer !important;
	transition: .2s ease-in;

	&:hover{
		background-color: orange !important;
	}
`;
