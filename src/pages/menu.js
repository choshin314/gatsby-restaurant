import React from "react"
import {graphql} from "gatsby"
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/shared-ui/layout'
import Hero from '../components/shared-ui/hero'
import SplitSection from '../components/shared-ui/splitSection'
import TextSection from '../components/shared-ui/textSection'
import {Wrapper, GridContainer} from '../components/styled-lib'
import Menu from '../components/menu/menu'


const MenuPage = ({data}) => {
    return (
        <Layout title="Our Menu" description="If you're looking for authentic Szechuan eats, you've come to the right place.  Check out our menu.">
            <Hero bgImgFluid={data.allContentfulHeroSection.edges[0].node.backgroundImage.fluid}>
                <Img 
                    fluid={data.allContentfulHeroSection.edges[0].node.contentImage.fluid} 
                    alt="check out our menu"
                />
            </Hero>
            <Menu />
        </Layout>
    )
}

export default MenuPage

export const query = graphql`
  query MyQuery {
    allContentfulHeroSection(filter: { title: { eq: "Menu Hero" } }) {
      edges {
        node {
          title
          backgroundImage {
            fluid {
              src
              srcSet
              base64
              aspectRatio
            }
          }
          contentImage {
            fluid {
              src
              srcSet
              base64
              aspectRatio
            }
          }
        }
      }
    }
  }
`