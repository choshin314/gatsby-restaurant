import React from 'react'
import styled from 'styled-components'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {devices} from '../styled-lib'

const ContactInfo = ({hours, address, map, phone}) => (
    <FlexColumn>
        <div className="info-block">
            <h3>HOURS OF OPERATION</h3>
            <span>Monday - Saturday</span>
            <span>11 A.M. to 9 P.M.</span>
        </div>
        <div className="info-block info-block--b">
            <h3>OUR LOCATION</h3>
            <span>4480 Chouteau Ave</span>
            <span>St. Louis, MO 63110</span>
            <a href="https://www.google.com/maps/place/4480+Chouteau+Ave,+St.+Louis,+MO+63110/@38.6302735,-90.2607128,17z/data=!3m1!4b1!4m5!3m4!1s0x87d8b4e06a46a917:0xfc78d7770f088d04!8m2!3d38.6302735!4d-90.2607128">
                Get Directions 
                <FontAwesomeIcon icon={faArrowRight} />
            </a>
        </div>
    </FlexColumn>
)

export default ContactInfo

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    border: 1px solid var(--contrast);
    margin: 2rem auto auto auto;
    color: white;
    background-color: var(--contrast);
    div.info-block {
        flex: 1 0 50%;
        border: white solid .5px;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        h3 {
            margin-top: 0;
            color: var(--primary);
            border-bottom: var(--primary) solid .5px;
        }
        a {
            margin-top: .5rem;
            svg {
                margin-left: .5rem;
                transition: opacity .2s ease-out, transform .2s ease-out;
                transform: translateX(-100%);
                opacity: 0;
                transform-origin: left;
            }
            &:hover svg {
                transform: translateX(0);
                opacity: 1;
            }
        }
        &.info-block--b {
            border-top: none;
        }
    }
    @media(min-width: ${devices.tablet}) {
        flex-direction: row;
        div.info-block.info-block--b {
            border-top: 1px solid white;
        }
    }

`