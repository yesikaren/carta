import React from 'react'
import MenuImage from '../assets/menu.png';
const Header = () => {
  return (
    <header className='bg-[#EB421A] h-14 flex justify-between items-center'>
      <img src={MenuImage} alt="" />
      <h3 className='text-[#FFFFFF] text-lg font-semibold'>Pisis</h3>
      <div></div>

    </header>
  )
}

export default Header