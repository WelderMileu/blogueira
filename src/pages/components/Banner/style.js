import styled from 'styled-components'

export const BannerText = styled.div`
	position: absolute;
	grid-column: 5;
	margin-top: 150px;

	p {
		width: 370px;
	}

	@media(max-width: 1050px) {
		grid-column: 4;
	}

	@media(max-width: 800px) {
		grid-column: 3;
		margin-top: 70px;
	}

	@media(max-width: 500px) {
		grid-column: 3;
		margin-top: 200px;
		text-align: center;

		h1 {
			font-size: 24px;
			width: 80%;
		}

		p {
			width: 80%;
		}		
	}
`

export const BannerImage = styled.div`
	position: absolute;
	grid-column: 9;
	bottom: 0;

	@media(max-width: 1050px) {
		grid-column: 8;
	}

	@media(max-width: 800px) {
		grid-column: 7;
	}

	@media(max-width: 500px) {
		display: none;
	}
`

export const BannerIconPrimary = styled.div`
	position:absolute;
	grid-column: 1;
	bottom: 0;
	width: 50%;

	@media(max-width: 1050px) {
		img {
			width: 100%;
		}
	}
`

export const BannerIconSecondary = styled.div`
	position:absolute;
	grid-column: 12;
	width:100%;

	@media(max-width: 1050px) {
		grid-column: 12;
		img {
			position: absolute;
			width: 100%;
		}
	}
`