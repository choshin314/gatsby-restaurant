import React from "react"
import {graphql, Link} from "gatsby"
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/shared-ui/layout'
import Hero from '../components/shared-ui/hero'
import TextSection from '../components/shared-ui/textSection'
import SplitSection from '../components/shared-ui/splitSection'
import ContactForm from '../components/contact/contactForm'
import ContactInfo from '../components/contact/contactInfo'
import {Wrapper, GridContainer} from '../components/styled-lib'

import mapPic from '../images/map5.png'

export default function About({data}) {
    const {contentfulHeroSection: heroData, contentfulMixedContent: textData } = data;
    return (
        <Layout>
            <Hero bgImgFluid={heroData.backgroundImage.fluid}>
                <Img fluid={heroData.contentImage.fluid} alt="Málà's Story (tldr: we love food!)" />
            </Hero>
            <TextSection >
                {documentToReactComponents(textData.textContent.json)}
                <ContactInfo />
            </TextSection>
            <SplitSection bgImg={mapPic} bgColor="var(--contrast)" imgWidth="50">
                <ContactForm />
            </SplitSection>
        </Layout>
        
    )
}

export const query = graphql`
  query ContactQuery {
    contentfulHeroSection(title: { eq: "Contact Hero" }) {
      backgroundImage {
        fluid {
          srcSetWebp
          srcSet
          src
          sizes
          base64
          aspectRatio
        }
      }
      contentImage {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
        }
      }
    }
    contentfulMixedContent(title: { eq: "Contact Mixed Content"}) {
        textContent {
            json
        }
    }
  }
`