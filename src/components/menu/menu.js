import React, {useReducer, useState, useContext} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'

import TextSection from '../shared-ui/textSection'
import MenuSection from './menuSection'
import MenuItemModal from './menuItemModal'
import {MenuContext} from '../../context/menuContext'

const Menu = () => {
    const data = useStaticQuery(graphql`
        query MenuCategoriesQuery {
            contentfulMenuLayout {
                menuCategories {
                    id
                    category
                    menu_item {
                        id
                        name
                        slug
                        description {
                            description
                        }
                        price
                        image {
                            fluid {
                                base64
                                aspectRatio
                                sizes
                                src
                                srcSet
                                srcSetWebp
                            }
                        }
                    }
                }
            }
        }
    `)
    const menuCategories = data.contentfulMenuLayout.menuCategories;
    const { state: menuState, dispatch } = useContext(MenuContext);

    function handleMenuSections(e) {
        const {nodeName, name} = e.target;
        if (nodeName === "BUTTON") {
            name === "all" ? 
            dispatch( { type: 'menuSlider/showAll' } ) : 
            dispatch( { type: 'menuSlider/showSection', payload: parseInt(name.replace('slide-', '')) })
        }
    }

    return (
        <TextSection patternBg >
            <ButtonGrp onClick={handleMenuSections}>
                <button name="all" className={menuState.showAll ? "activeBtn" : ""}>All</button>
                {menuCategories && menuCategories.map( (category, i) => (
                    <button name={`slide-${i}`} className={menuState.showSection === i ? "activeBtn" : ""}>{category.category}</button>
                ))}
            </ButtonGrp>
            <MenuFrame>
                <MenuTrack className={menuState.showAll ? "show-all" : "show-section"} activeSlide={menuState.showSection} totalSlides={menuCategories.length}>
                    {menuCategories && menuCategories.length > 0 && menuCategories.map((cat, index) => (
                        <MenuSection 
                            key={cat.id}
                            category={cat.category} 
                            menuItems={cat.menu_item} 
                            showAll={menuState.showAll}
                            index={index}
                            activeSlide={menuState.showSection}
                        />
                    ))}
                </MenuTrack>
            </MenuFrame>
            {/* <MenuItemModal open /> */}
        </TextSection>
    )
}

export default Menu

const ButtonGrp = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    button {
        font-family: 'Manrope','Montserrat', sans-serif;
        padding: 1rem;
        font-size: 1.3rem;
        font-weight: 700;
        background: transparent;
        color: var(--primary);
        border: none;
        cursor: pointer;
        position: relative;
        text-align: center;
        &::after {
            box-sizing: border-box;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 5px solid var(--primary);
            opacity: 0;
            transition: opacity .2s ease-out;
        }
        &:focus::after, &.activeBtn::after {
            opacity: 1;
        }
    }
`

const MenuFrame = styled.div`
    width: 100%;
    min-height: 400px;
    overflow-x: hidden;
`
const MenuTrack = styled.div`
    width: 300%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    transform: translateX(0%);
    transition: transform 0.15s ease-in;
    &.show-all {
        grid-template-columns: 1fr;
        width: 100%;
    }
    &.show-section {
        transform: translateX(${({totalSlides, activeSlide}) => (-100 / totalSlides) * activeSlide }%);
    }
`