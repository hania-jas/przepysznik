import React from 'react';



const Navbar = (): JSX.Element  => {
  return (
    <nav className='navbar'>
      <div className='leftSide'>
        PRZEPYSZNIK
      </div>
      <div className='rightSide'>
        <a href="#recipies">RECIPIES</a>
        <a href="#todays">TODAY'S</a>
        <a href="#addRecipie">ADD YOURS</a>
      </div>
    </nav>
  )
}

export default Navbar;