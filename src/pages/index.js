import React from "react"
import {graphql, Link} from "gatsby"
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/shared-ui/layout'
import Hero from '../components/shared-ui/hero'
import SplitSection from '../components/shared-ui/splitSection'
import TextSection from '../components/shared-ui/textSection'
import {GridContainer} from '../components/styled-lib'
import {ButtonLink} from '../components/shared-ui/button'
import HomeCard from '../components/home/homeCard'

export default function Home({data}) {
  const {pageContent} = data.contentfulPageContainer;
  console.log(pageContent[4])

  return (
    <Layout title="Welcome to Málà">
      <Hero
        bgImgFluid={pageContent[0].backgroundImage.fluid}
        bgVideo={"https:" + pageContent[0].backgroundVideo.file.url}
        bgVideoType={pageContent[0].backgroundVideo.file.contentType}
      >
        <Img fluid={pageContent[0].contentImage.fluid} alt="modern and authentic Szechuan Cuisine"/>
      </Hero>
      <TextSection patternBg>
        {documentToReactComponents(pageContent[1].textContent.json)}
      </TextSection>
      <SplitSection bgImg={`https:${pageContent[2].backgroundImage.file.url}`} imgWidth="55">
        {documentToReactComponents(pageContent[2].textContent.json)}
        <ButtonLink to="/menu">See Menu</ButtonLink>
      </SplitSection>
      <TextSection patternBg>
        <h1>Check Us Out!</h1>
        <GridContainer columns="repeat(3, 1fr)">
          {pageContent[4].cards.map(card => (
            <HomeCard 
              bgImage={`https:${card.backgroundImage.file.url}`}
              heading={card.heading}
              text={card.mainText}
              link={{ text: card.buttonText, location: card.buttonLink }}
            />
          ))}
        </GridContainer>
      </TextSection>
      <SplitSection bgImg={`https:${pageContent[3].backgroundImage.file.url}`} imgSide="right" imgWidth="70">
        {documentToReactComponents(pageContent[3].textContent.json)}
        <ButtonLink to="/contact">Contact Us</ButtonLink>
      </SplitSection>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    contentfulPageContainer(pageTitle: {eq: "Home Page"}) {
      pageContent {
        ... on ContentfulHeroSection {
          heading
          subheading
          backgroundImage {
            fluid {
              srcSet
            }
          }
          backgroundVideo {
            file {
              contentType
              url
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
        ... on ContentfulMixedContent {
          textContent {
            json
          }
          backgroundImage {
            file {
              url
            }
          }
        }
        ... on ContentfulCardGroup {
          cards {
            heading
            mainText
            buttonText
            buttonLink
            backgroundImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`