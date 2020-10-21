import React from 'react'
import styled from 'styled-components'

export const devices = {
    lgPhone: '600px',
    tablet: '768px',
    laptop: '1400px',
    wide: '1800px'
}

export const Wrapper = styled.div`
    width: 90%;
    max-width: 1200px;
    padding: 1rem;
    margin: 0 auto;
    position: relative;
`
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: ${props => props.columns};
    grid-gap: 1rem;
`

export const Card = styled.div`
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: transform .2s ease-in-out;
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    &:hover {
        transform: scale(1.05);
    }
    &:hover::after {
        opacity: 1;
    }
`