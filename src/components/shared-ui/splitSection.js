import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'

import {devices, Wrapper} from '../styled-lib'

const SplitSection = ({imgSide="left", imgWidth="40", bgImg, bgColor="white", children}) => {
    const sectionRef = useRef(null);
    
    useEffect(() => {
        const observerCallback = (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("appear")
              observer.unobserve(entry.target)
            }
          })
        }
        const sectionObserver = new IntersectionObserver(observerCallback, {rootMargin: "-100px 0px 0px 0px"});
        if (sectionRef.current) sectionObserver.observe(sectionRef.current);
        return () => sectionObserver.unobserve(sectionRef.current);
    }, [])

    return (
      <section>
        <Wrapper>  
          <SplitDiv ref={sectionRef}>
            {imgSide === 'left' && <ImgSide bgImg={bgImg} imgWidth={imgWidth} imgSide="left" />}
            <ContentSide imgWidth={imgWidth} imgSide={imgSide} bgColor={bgColor}>{children}</ContentSide>
            {imgSide === 'right' && <ImgSide bgImg={bgImg} imgWidth={imgWidth} imgSide="right" />}
          </SplitDiv>
        </Wrapper>
      </section>
    )
}

export default SplitSection

const SplitDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: .5rem 0;
  @media(min-width: ${devices.tablet}) {
    flex-direction: row;
  }
`

const ImgSide = styled.div`
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 300px;
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  flex-basis: ${props => props.imgWidth}%;
  
  transform: translateX(${props => props.imgSide === "left" ? "100%" : "-100%"});
  opacity: 0;
  ${SplitDiv}.appear & {
    transform: translateX(0);
    opacity: 1;
    transition: opacity .5s ease-in-out, transform .250s ease-in-out
  }
`

const ContentSide = styled.div`
  background-color: ${props => props.bgColor};
  position: relative;
  flex-grow: 1;
  flex-basis: calc(100% - ${props => props.imgWidth}%);
  padding-bottom: 2rem;
  z-index: 100;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  ${SplitDiv}.appear & {
      opacity: 1;
  }
  @media(min-width: ${devices.tablet}) {
    padding-bottom: 2rem;
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
    opacity: 1;
  }
`