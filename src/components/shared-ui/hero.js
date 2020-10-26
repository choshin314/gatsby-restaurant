import React, {useContext, useEffect, useRef} from 'react'
import styled from 'styled-components'

import {NavContext} from '../../context/navContext'

const Hero = (props) => {
    const { bgVideo, bgVideoType, bgImg } = props;
    const {setNavSolid} = useContext(NavContext);
    const heroRef = useRef()

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            !entry.isIntersecting ? setNavSolid(true) : setNavSolid(false);
        })
    }
    const heroObserver = new IntersectionObserver(observerCallback, { rootMargin: "-100px 0px 0px 0px" });

    useEffect(() => {
        if(heroRef) heroObserver.observe(heroRef.current);
        return (() => heroObserver.disconnect())
    })

    return (
        <Section bgImg={bgImg} ref={heroRef}>
            {bgVideo && (<VideoContainer>
                <video muted loop autoPlay>
                    <source src={bgVideo} type={bgVideoType} />
                    Your browser does not support the video tag
                </video>
            </VideoContainer>)}
            <Content>
                {props.children}
            </Content>
        </Section>
    )
}

export default Hero

const Section = styled.section`
    position: relative;
    height: 100vh;;
    background-image: ${props => props.bgImg ? `url("${props.bgImg}")` : 'none'};
    background-position: center center;
    background-size: cover;

`

const VideoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
    }
    
`

const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1rem;
    h1 {
        font-size: 2rem;
    }
`