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
        <Layout title={data.contentfulSeo.metaTitle} description={data.contentfulSeo.metaDescription}>
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
    contentfulSeo(name: { eq: "Menu SEO" }) {
      metaTitle
      metaDescription
    }
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