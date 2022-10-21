import React from 'react'
import { MdOutlineNightsStay } from 'react-icons/md'

const Header = ({handleToggleDarkMode}) => {
  return (
    <div className='header'>
      <h1>Mint Notes</h1>
      <MdOutlineNightsStay onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className='save'  color='#679186'size = '2em'/>
    </div>
  )
}

export default Header
