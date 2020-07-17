import styled, { css } from 'styled-components'
import { FaInstagram, FaYoutube } from 'react-icons/fa'

export const icons = css`
	font-size: 40px;
	color: var(--red);
	margin-right: 5px;	
`;

export const Instagram = styled(FaInstagram)`${icons}`;
export const Youtube = styled(FaYoutube)`${icons}`;

export const ContainerSociais = styled.div`
	display: flex;
	flex-direction: row;
	align-items:center;
	justify-content: center;

	border-top: 1px solid var(--orange);
	border-bottom: 1px solid var(--orange);
	padding: 20px;
	margin-bottom: 100px;
`; 

export const ContainerIcons = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20px;
`;
