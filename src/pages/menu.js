import React from "react"
import {graphql, Link} from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/shared-ui/layout'
import Hero from '../components/shared-ui/hero'
import SplitSection from '../components/shared-ui/splitSection'
import TextSection from '../components/shared-ui/textSection'
import {Wrapper, GridContainer} from '../components/styled-lib'
import Menu from '../components/menu/menu'

const MenuPage = ({data}) => {
    console.log(data)
    return (
        <Layout>
            <Hero bgImgFluid={data.allContentfulHeroSection.edges[0].node.backgroundImage.fluid}></Hero>
            <Menu />
        </Layout>
    )
}

export default MenuPage

export const query = graphql`
    query MyQuery {
        allContentfulHeroSection(filter: {title: {eq: "Menu Hero"}}) {
            edges {
            node {
                title
                backgroundImage {
                fluid {
                    srcSet
                }
                }
            }
            }
        }
        }
`