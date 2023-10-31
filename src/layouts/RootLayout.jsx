import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'


const RootLayout = () => {
  return (
    <>
        <Box className="bg-[#191919] p-4">
            <Navbar/>
            <Outlet/>
        </Box>
    </>
  )
}

export default RootLayout