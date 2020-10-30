import React, {useReducer, useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'

import TextSection from '../shared-ui/textSection'
import MenuSection from './menuSection'

function reducer(state, action) {
    switch (action.type) {
        case 'showAll': return { showAll: true, activeSlide: null };
        case 'showSection': return { showAll: false, activeSlide: action.index };
        default: return { showAll: true, activeSlide: null };
    }
}

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
    const [state, dispatch] = useReducer(reducer, {showAll: true, activeSlide: null})
    function navigateMenu(e) {
        const {nodeName, name} = e.target;
        if (nodeName === "BUTTON") {
            name === "all" ? 
            dispatch( { type: 'showAll' } ) : 
            dispatch( { type: 'showSection', index: parseInt(name.replace('slide-', '')) })
        }
    }
    console.log(menuCategories[state.activeSlide])
    console.log(state);
    return (
        <TextSection patternBg >
            <ButtonGrp onClick={navigateMenu}>
                <button name="all">All</button>
                {menuCategories && menuCategories.map( (category, i) => (
                    <button name={`slide-${i}`}>{category.category}</button>
                ))}
                
            </ButtonGrp>
            {/* <MenuFrame>
                <MenuTrack className={state.showAll ? "show-all" : "show-section"} activeSlide={state.activeSlide} totalSlides={menuCategories.length}>
                    {menuCategories[state.activeSlide] && (
                        <MenuSection 
                            category={menuCategories[state.activeSlide].category} 
                            menuItems={menuCategories[state.activeSlide].menu_item} 
                            className={state.showAll ? "show-all" : "show-section"}
                        />
                    )}
                </MenuTrack>
            </MenuFrame> */}
            <MenuFrame>
                <MenuTrack className={state.showAll ? "show-all" : "show-section"} activeSlide={state.activeSlide} totalSlides={menuCategories.length}>
                    {menuCategories && menuCategories.length > 0 && menuCategories.map((cat, index) => (
                        <MenuSection 
                            key={cat.id}
                            category={cat.category} 
                            menuItems={cat.menu_item} 
                            showAll={state.showAll}
                            index={index}
                            activeSlide={state.activeSlide}
                        />
                    ))}
                </MenuTrack>
            </MenuFrame>
        </TextSection>
    )
}

export default Menu

const ButtonGrp = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    button {
        padding: 1rem 2rem;
        font-size: 1rem;
        background: transparent;
        border: none;
        cursor: pointer;
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