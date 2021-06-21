import React from 'react'
import logo from '../../img/logo.png'

const Header = props => {
    return (
        <header className = "center">
            <img src = {logo} alt = "pokemon" />
        </header>
    )
}


export default Header
