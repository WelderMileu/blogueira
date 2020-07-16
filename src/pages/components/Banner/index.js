import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import group1 from '../../assets/images/group1.svg'
import group2 from '../../assets/images/group2.svg'

import { 
	Text, 
	TextSmall, 
	Flex,
	BannerText, 
	BannerImage,
	BannerIconPrimary,
	BannerIconSecondary
} from '../../style'

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
			<BannerText>
				<TextSmall mt="20px" color="gray"> Media Kit Profissional </TextSmall>
				<Text color='#C4C4C4' mt="10px">
					Sou uma blogueira tenho canal no youtube,
					uma conta no instagram meu sonho e se tornar
					uma jornalista.
				</Text>
			</BannerText>
			<BannerImage>
				<Img 
					fixed={moca.childImageSharp.fixed} 
					alt="Moca"
				/>
			</BannerImage>
			<BannerIconPrimary>
				<img 
					src={group1} 
					alt="Icon1" 
				/>
			</BannerIconPrimary>
			<BannerIconSecondary>
				<img 
					src={group2} 
					alt="Icon2" 
				/>
			</BannerIconSecondary>
		</Flex>
	)
}

export default Banner;
