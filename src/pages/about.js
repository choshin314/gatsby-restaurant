import React from "react"
import {graphql, Link} from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/shared-ui/layout'
import Hero from '../components/shared-ui/hero'
import TextSection from '../components/shared-ui/textSection'
import {Wrapper, GridContainer} from '../components/styled-lib'

export default function About({data}) {
    console.log(data);
    return (
        <Layout>
            <Hero bgImg={`https:${data.allContentfulHeroSection.edges[0].node.backgroundImage.file.url}`}>
                <h1>{data.allContentfulHeroSection.edges[0].node.heading}</h1>
                <h2>{data.allContentfulHeroSection.edges[0].node.subheading}</h2>
            </Hero>
            <TextSection patternBg >
                {documentToReactComponents(data.allContentfulMixedContent.edges[0].node.textContent.json)}
            </TextSection>
        </Layout>
        
    )
}


export const query = graphql`
  query AboutQuery {
    allContentfulHeroSection(filter: { title: { eq: "About Hero" } }) {
      edges {
        node {
          heading
          subheading
          backgroundImage {
            file {
              contentType
              fileName
              url
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