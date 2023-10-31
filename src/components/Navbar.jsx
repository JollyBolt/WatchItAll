import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack 
    direction="row" 
    alignItems='center' 
 
    className='sticky bg-black top-0 justify-between text-white md:rounded-xl p-3 px-10'>
        <Link 
        to='/' 
        className=' flex items-center'>
            <img src={logo} alt=""  className='h-[45px]'/>
            <Typography className='text-3xl font-black ml-2 hidden md:block'>
              <span><span className='text-red-600'>W</span>atch<span className='text-red-600'>I</span>t<span className='text-red-600'>A</span>ll</span>
            </Typography>
        </Link>
        <SearchBar/>
    </Stack>
  )
}

export default Navbar