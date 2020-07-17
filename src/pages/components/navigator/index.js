import React from 'react'

import { View } from '../../style'
import { NavContainer, NavItens } from './style'

const Navigator = () => {
	return (
		<View position="fixed" index="3000" padding='20px' ml="20%">
			<NavContainer>
				<NavItens color="var(--gray)">Home</NavItens>
				<NavItens color="var(--primary)">Sobre</NavItens>
				<NavItens color="var(--primary)">Sociais</NavItens>
				<NavItens color="var(--primary)">Contato</NavItens>
			</NavContainer>
		</View>
	)
}

export default Navigator;
