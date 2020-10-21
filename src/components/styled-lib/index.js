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