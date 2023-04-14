import React from 'react'
import "./style.css"
import Progressbar from './Card/Progressbar';
import LabelBottomNavigation from './Card/Navigation';

const Header = () => {
  return (
    <div>
      <Progressbar/>
      <LabelBottomNavigation/>
    </div>
  )
}

export default Header
