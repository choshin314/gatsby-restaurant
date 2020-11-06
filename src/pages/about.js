import React from "react"
import {graphql, Link} from "gatsby"
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/shared-ui/layout'
import Hero from '../components/shared-ui/hero'
import TextSection from '../components/shared-ui/textSection'
import {Wrapper, GridContainer} from '../components/styled-lib'

export default function About({data}) {
    return (
        <Layout title={data.contentfulSeo.metaTitle} description={data.contentfulSeo.metaDescription}>
            <Hero bgImgFluid={data.allContentfulHeroSection.edges[0].node.backgroundImage.fluid}>
                <Img fluid={data.allContentfulHeroSection.edges[0].node.contentImage.fluid} alt="Málà's Story (tldr: we love food!)" />
            </Hero>
            <TextSection patternBg >
                {documentToReactComponents(data.allContentfulMixedContent.edges[0].node.textContent.json)}
            </TextSection>
        </Layout>
        
    )
}


export const query = graphql`
  query AboutQuery {
    contentfulSeo(name: {eq: "About SEO"}) {
      metaTitle
      metaDescription
    }
    allContentfulHeroSection(filter: { title: { eq: "About Hero" } }) {
      edges {
        node {
          heading
          subheading
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
    allContentfulMixedContent(
      filter: { title: { eq: "About Mixed Content" } }
    ) {
      edges {
        node {
          id
          textContent {
            json
          }
        }
      }
    }
  }
`