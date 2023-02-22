import React from 'react'
import { NavLink } from 'react-router-dom'
import AlertDialog from './Dialog'

function Navbar() {
    return (
        <nav className='w-screen'>
            <div className='lg:w-[80vw] mx-auto border-b p-3 flex justify-between align-middle'>
                <button className={'p-2'}>Sign Up</button>
                <NavLink className={'text-3xl font-bold underline'}>Library</NavLink>
                <button><AlertDialog /></button>
            </div>
        </nav>
    )
}

export default Navbar