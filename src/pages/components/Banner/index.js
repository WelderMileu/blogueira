import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import group1 from '../../assets/images/group1.svg'
import group2 from '../../assets/images/group2.svg'

import { View, Text, TextSmall, Flex } from '../../style'

const Banner = () => {
	const { moca } = useStaticQuery(graphql`
			query {
				moca: file(relativePath: { eq: "moca.png" }) {
					childImageSharp {
						fixed {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		`);

	return (
		<Flex>
			<View style={{ position: 'absolute', gridColumn: '5', marginTop:'150px' }}>
				<TextSmall style={{ marginBottom: '10px' }}> 
					Media Kit Profissional 
				</TextSmall>
				<Text style={{ color: '#C4C4C4', width: '370px' }}>
					Sou uma blogueira tenho canal no youtube,
					uma conta no instagram meu sonho e se tornar
					uma jornalista.
				</Text>
			</View>
			<View style={{ position: 'absolute', gridColumn: '9', marginTop: '120px' }}>
				<Img fixed={moca.childImageSharp.fixed} alt="Moca" />
			</View>
			<View style={{ position: 'absolute', gridColumn: '1', marginTop: '120px' }}>
				<img src={group1}/>
			</View>
			<View style={{ position: 'absolute', gridColumn: '12'}}>
				<img src={group2}/>
			</View>
		</Flex>
	)
}

export default Banner;
