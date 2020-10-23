import React from 'react'
import styled, {css} from 'styled-components'
import {Link} from 'gatsby'

import {Card} from '../styled-lib'

const HomeCard = ({bgColor="white", bgImage, heading, text, link}) => {
    return (
        <Card>
            <FlexDiv bg={bgColor} bgImage={bgImage}>
                <h2>{heading}</h2>
                <p>{text}</p>
                <Link to={link.location}>{link.text}</Link>
            </FlexDiv>
        </Card>
    )
}

export default HomeCard

const FlexDiv = styled.div`
    padding: 2.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${props => props.bgColor};
    ${props => props.bgImage && css`
        background-image: url(${props => props.bgImage});`
    }
    background-size: cover;
    background-position: center center;
    h2 {
        margin-top: 0;
        text-transform: uppercase;
    }
    p {
        margin-bottom: 1.5rem;
    }
    a {
        text-decoration: none;
        color: var(--primary);
        letter-spacing: 2px;
        position: relative;
    }
    a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--primary);
        transition: transform .2s ease-in-out;
        transform: scaleX(0);
        transform-origin: right;
    }
    a:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
`