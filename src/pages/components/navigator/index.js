import React from 'react'
import { 
	View,
	NavContainer,
	NavItens
} from '../../style'

const Navigator = () => {
	return (
		<View position="fixed" index="3000" padding='20px' ml="20%">
			<NavContainer>
				<NavItens color="gray">Home</NavItens>
				<NavItens color="#C4C4C4">Sobre</NavItens>
				<NavItens color="#C4C4C4">Sociais</NavItens>
				<NavItens color="#C4C4C4">Contato</NavItens>
			</NavContainer>
		</View>
	)
}

export default Navigator;