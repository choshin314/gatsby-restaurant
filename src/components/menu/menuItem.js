import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import {devices} from '../styled-lib'

const MenuItem = ({img, name, description}) => {
    return (
        <ItemContainer>
            <Img fluid={img.fluid} alt={img.alt}/>
            <div className="textContainer">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </ItemContainer>
    )
}

export default MenuItem

const ItemContainer = styled.div`
    margin: 0 auto;
    height: 400px;
    display: grid;
    grid-template-rows: 3fr 2fr;
    @media(min-height: ${devices.tablet}) {
        height: 530px;
    }
    div.imgContainer {
        overflow: hidden;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
    div.textContainer {
        text-align: center;
        margin: 0 auto;
        width: 90%;
        h3 {
            font-size: 1.3rem;
            text-transform: uppercase;
            color: var(--primary);
            position: relative;
            &::after  {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 50px;
                height: 3px;
                border-radius: 5px;
                background-color: var(--primary);
            }
        }
        p {
            text-align: center;
        }
    }
`