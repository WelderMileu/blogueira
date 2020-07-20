import React from 'react'

import { Text } from '../../style'
import { 
	Instagram, 
	Youtube, 
	ContainerSociais, 
	ContainerIcons 
} from './style'

const Sociais = () => {
	return (
		<ContainerSociais>
			<ContainerIcons>
				<Youtube />
				<Text color="var(--gray)"> youtube.com </Text>
			</ContainerIcons>
			<ContainerIcons>
				<Instagram />
				<Text color="var(--gray)"> Danille Faria </Text>
			</ContainerIcons>
		</ContainerSociais>
	)
}

export default Sociais;
