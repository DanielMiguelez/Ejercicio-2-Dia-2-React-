import React from 'react'

const Header = (props) => {
    return (
      <h1 className='header'>El blog de {props.User.name} {props.User.surname}</h1>
    )
  }
  export default Header