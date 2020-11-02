import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {devices} from '../styled-lib'

const MenuItem = ({img, name, id, price, description}) => {
    return (
        <ItemContainer>
            <div className="textContainer">
                <h3>{name}</h3>
                <p>{description}</p>
                <AddToOrder className="snipcart-add-item"
                    data-item-id={id}
                    data-item-price={price}
                    data-item-url="/menu"
                    data-item-description={description}
                    data-item-name={name}
                >
                    Add to Order
                    <FontAwesomeIcon icon={faArrowRight} />
                </AddToOrder>
            </div>
            <Img fluid={img.fluid} alt={img.alt}/>
        </ItemContainer>
    )
}

export default MenuItem

const ItemContainer = styled.div`
    background-color: white;
    margin: 0 auto;
    min-height: 200px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    cursor: pointer;
    div.imgContainer {
        overflow: hidden;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
    div.textContainer {
        text-align: left;
        margin: 0 auto;
        padding: 1rem;
        h3 {
            margin-top: 0;
            font-size: 1.3rem;
            text-transform: uppercase;
            color: var(--primary);
            position: relative;
            &::after  {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 0;
                width: 100%;
                height: 3px;
                border-radius: 5px;
                background-color: var(--primary);
                transform: scaleX(0);
                transform-origin: left;
                transition: transform .2s ease-out;
            }
        }
        p {
            text-align: left;
        }
        &:hover h3::after {
            transform: scaleX(1);
        }
    }
`
const AddToOrder = styled.button`
    position: relative;
    background: transparent;
    font-family: 'Manrope', 'Montserrat', sans-serif;
    font-weight: 700;
    color: var(--primary);
    border: none;
    padding: 0;
    cursor: pointer;
    &:active, &:focus {
        outline-style: none;
    }
    & > svg {
        margin-left: .5rem;
        transition: opacity .2s ease-out, transform .2s ease-out;
        transform: translateX(-110%);
        opacity: 0;
    }
    &:hover > svg, &:active > svg {
        transform: translateX(0);
        opacity: 1;
    }
`