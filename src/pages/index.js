import React from "react"
import {graphql, Link} from "gatsby"
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/shared-ui/layout'
import Hero from '../components/shared-ui/hero'
import SplitSection from '../components/shared-ui/splitSection'
import TextSection from '../components/shared-ui/textSection'
import heroArt from '../images/homeHeroArt.png'
import cardBg from '../images/dumplings.svg'
import {Wrapper, GridContainer} from '../components/styled-lib'
import HomeCard from '../components/home/homeCard'

export default function Home({data}) {
  const {pageContent} = data.contentfulPageContainer;
  console.log(pageContent[0].backgroundImage)

  return (
    <Layout>
      <Hero
        bgImgFluid={pageContent[0].backgroundImage.fluid}
        bgVideo={"https:" + pageContent[0].backgroundVideo.file.url}
        bgVideoType={pageContent[0].backgroundVideo.file.contentType}
      >
        <Img fluid={pageContent[0].contentImage.fluid} alt="modern and authentic Szechuan Cuisine"/>
      </Hero>
      <TextSection patternBg>
        <h1>Fast. Fresh. Flavorful.</h1>
        <p>Our recipes have been passed down from generations and given a modern twist. Each dish is carefully crafted to delight your taste buds and includes fresh, responsibly-sourced ingredients. When you’re craving a quick, healthy, and delicious meal, choose MAK.</p>
        <p>Our meats are raised naturally, free of antibiotics, hormones, and steroids. Our seafood is sustainably sourced. We locally purchase our produce and other goods whenever possible. Our packaging was carefully chosen with sustainability in mind. We don’t use MSG. Our chicken (other than the wings, of course) is made from white meat. We frequently use gluten free soy sauce and offer vegetarian, vegan, and gluten free options. </p>
      </TextSection>
      <SplitSection bgImg={"https:" + pageContent[1].backgroundImage.file.url} imgWidth="55">
        {documentToReactComponents(pageContent[1].textContent.json)}
        <Link to="/menu">See Menu</Link>
      </SplitSection>
      <TextSection patternBg>
        <h1>Check Us Out!</h1>
        <GridContainer columns="repeat(3, 1fr)">
          <HomeCard
            bgImage={cardBg}
            heading="see what's cookin'"
            text="First time here?  Peep our menu and get hungry!"
            link={{text: "SEE MENU", location: "/menu"}}
          />
          <HomeCard
            bgImage={cardBg}
            heading="our food = our passion"
            text="Szechuan cookin' has been a part of our lives since the very beginning."
            link={{text: "OUR STORY", location: "/about"}}
          />
          <HomeCard
            bgImage={cardBg}
            heading="holler at us!"
            text="Come by and see us on the corner of Chouteau and Taylor.  Got a question?  Shoot us a message."
            link={{text: "LOCATION/CONTACT", location: "/contact"}}
          />
        </GridContainer>
      </TextSection>
      <SplitSection bgImg={"https:" + pageContent[1].backgroundImage.file.url} imgSide="right" imgWidth="70">
        <h1>Private Events & Catering</h1>
        <p>Got a big party coming?  No problem, Málà is happy to host!  Our private room has a 20-seat capacity, so call ahead to reserve!</p>
        <p>Got a big party elsewhere?  Also not a problem!  Contact us today to inquire about event catering!</p>
        <Link to="/contact">Contact Us</Link>
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
              contentType
            }
          }
        }
      }
    }
  }
`