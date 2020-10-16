import React from 'react'
import styled from 'styled-components'

import {devices} from '../styled-lib'

const SplitSection = ({imgSide="left", imgWidth="40", bgImg, children}) => {
    return (
        <Section>
            {imgSide === 'left' && <ImageSide bgImg={bgImg} imgWidth={imgWidth}/>}
            <ContentSide imgWidth={imgWidth} imgSide={imgSide}>{children}</ContentSide>
            {imgSide === 'right' && <ImageSide bgImg={bgImg} imgWidth={imgWidth}/>}
        </Section>
    )
}

export default SplitSection

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: .5rem 0;
  @media(min-width: ${devices.tablet}) {
    flex-direction: row;
  }
`

const ImageSide = styled.div`
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center center;
  min-height: 300px;
  position: relative;
  flex-grow: 1;
  flex-basis: ${props => props.imgWidth}%;
`

const ContentSide = styled.div`
  background-color: white;
  color: black;
  height: 500px;
  position: relative;
  flex-grow: 1;
  flex-basis: calc(100% - ${props => props.imgWidth}%);
  z-index: 100;
  @media(min-width: 1000px) {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: inherit;
      transform: skew(${props => props.imgSide === 'left' ? '10' : '-10'}deg);
      transform-origin: bottom ${props => props.imgSide === 'left' ? 'left' : 'right'};
      z-index: -1;
    }
  }
`