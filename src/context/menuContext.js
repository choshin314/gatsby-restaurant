import React, {useState, useReducer} from 'react'

const MenuContext = React.createContext();

const initState = {
    modalOpen: false,
    selectedMenuItem: null,
    showSection: null,
    showAll: true
}

function reducer(state, action) {
    switch(action.type) {
        case "menuSlider/showAll": {
            return { ...state, showSection: null, showAll: true };
        };
        case "menuSlider/showSection": {
            return { ...state, showSection: action.payload, showAll: false };
        };
        case "menuModal/modalOpened": {
            return { ...state, modalOpen: true, selectedMenuItem: action.payload };
        };
        case "menuModal/modalClosed": {
            return { ...state, modalOpen: false, selectedMenuItem: null };
        };
        default: {
            return { ...state };
        };
    }
}

const MenuContextProvider = (props) => {
    // const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <MenuContext.Provider value={{state, dispatch}} >
            {props.children}
        </MenuContext.Provider>
    )
}

export {MenuContextProvider, MenuContext};