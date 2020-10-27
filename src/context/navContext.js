import React, {useState} from 'react'

const NavContext = React.createContext();

const NavContextProvider = (props) => {
    const [navSolid, setNavSolid] = useState(false);
    return (
        <NavContext.Provider value={{navSolid, setNavSolid}} >
            {props.children}
        </NavContext.Provider>
    )
}

export {NavContextProvider, NavContext};