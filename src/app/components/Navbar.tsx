import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>

                <Link className='navbar__link relative' href="/">
                Home
                </Link>
                
                <Link className='navbar__link relative' href="/about">
                About
                </Link>
                
                <Link className='navbar__link relative' href="/features">
                Features
                </Link>
                
                <Link className='navbar__link relative' href="/contact">
                Contact
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Navbar