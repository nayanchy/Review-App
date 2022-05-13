import React from 'react'

function Header({text}) {
    const headerStyles = {
        backgroundColor: '#333',
        color:'#ff6a95'
    }
    return(
        <header style={headerStyles}>
            <div className='container'>
                <h2>{text}</h2>
            </div>
        </header>
        
    )
}

Header.defaultProps = {
    text: 'Review App'
}


export default Header
