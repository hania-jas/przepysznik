import React from 'react';



const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='leftSide'>
      <a href="#">PRZEPYSZNIK</a>
      </div>
      <div className='rightSide'>
        <a href="#">RECIPIES</a>
        <a href="#">TODAY'S</a>
        <a href="#">ADD YOURS</a>
      </div>
    </nav>
  )
}

export default Navbar;