import React, {useContext, useEffect, useState} from 'react'
import styled, {keyframes} from 'styled-components'
import Img from 'gatsby-image'
import moment from 'moment-timezone'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {MenuContext} from '../../context/menuContext'

const MenuItemModal = () => {
    const [ isTakingOrders, setIsTakingOrders ] = useState(false);
    const {state: menuState, dispatch} = useContext(MenuContext);
    const { modalOpen, selectedMenuItem } = menuState;
    
    useEffect(() => {
        console.log( moment().tz('America/Chicago').format('ddd HHmm') )
        const dayTime = moment().tz('America/Chicago').format('ddd HHmm').split(' ');
        if ( dayTime[0] === "Sun" || parseInt(dayTime[1]) < 1059  || parseInt(dayTime[1]) > 2045 ) {
            setIsTakingOrders(false);
        } else {
            setIsTakingOrders(true);
        }
    }, [])
    
    return (
        <>
        <ModalBackdrop className={modalOpen && selectedMenuItem ? "modal-open" : ""} />
        <ModalContainer className={modalOpen && selectedMenuItem ? "modal-open" : ""}>
            <StyledImg fluid={selectedMenuItem.img.fluid} alt={selectedMenuItem.img.alt} />
            <ContentDiv>
                <div className="heading">
                    <h2>{selectedMenuItem.name}</h2>
                    <span>${selectedMenuItem.price}</span>
                </div>
                <div className="description">
                    <p>{selectedMenuItem.description}</p>
                    <p>*Orders take an average of about 20 minutes to prepare.  We thank you in advance for your patience!</p>
                </div>

                <AddToOrder className="snipcart-add-item"
                    data-item-id={selectedMenuItem.id}
                    data-item-price={selectedMenuItem.price}
                    data-item-url="/menu"
                    data-item-description={selectedMenuItem.description}
                    data-item-name={selectedMenuItem.name}
                    disabled={!isTakingOrders}
                >
                    {isTakingOrders ? "ADD TO ORDER" : "ORDER FROM 11AM-8:45PM MON-SAT"}
                </AddToOrder>
            </ContentDiv>
            <Exit onClick={(e) => dispatch({type: "menuModal/modalClosed"})} >
                <FontAwesomeIcon icon={faTimes} />
            </Exit>
        </ModalContainer>
        </>
    )
}

export default MenuItemModal



const ModalBackdrop = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    z-index: 120;
    opacity: 0;
    transition: opacity .2s ease-out;
    &.modal-open {
        opacity: 1;
        display: block;
    }
`

const slideUp = keyframes`
    from {
        transform: translate(-50%, 100%);
    }
    to {
        transform: translate(-50%, -50%);
    }
`

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 600px;
    max-height: calc(100vh - 10rem);
    background-color: white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    border-radius: 5px;
    transform: translate(-50%, -50%);
    animation: ${slideUp} .2s linear;
    z-index: 120;
    overflow-y: auto;
`
const StyledImg = styled(Img)`
    max-height: 300px;
`
const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;

    div.heading {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        h2, span {
            font-size: 1.2rem;
        }
    }
    div.description {
        margin-bottom: 2rem;
    }
`
const AddToOrder = styled.button`
    position: relative;
    background-color: var(--primary);
    color: white;
    font-family: 'Manrope', 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    padding: 1rem 2rem;
    cursor: pointer;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        opacity: 0;
        transition: opacity .3s ease-out;
    }
    &:active::after, &:hover::after {
        opacity: 1;
    }
    &[disabled] {
        background-color: grey;
        &:active::after, &:hover::after {
            opacity: 0;
        }
    }
`

const Exit = styled.button`
    font-size: 1.5rem;
    position: absolute;
    top: .5rem;
    right: .5rem;
    background: rgba(0,0,0,.5);
    border: none;
    color: var(--primary);
    cursor: pointer;
`