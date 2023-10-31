import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [searchTerm,setSearchTerm] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
      e.preventDefault()
      if(searchTerm){
        navigate(`/search/${searchTerm}`)
        setSearchTerm("")
      }
    }

  return (
    <Paper
    component="form"
    onSubmit={handleSubmit}
    className='p-2 w-[70%] md:w-[40%] flex pl-4 rounded-full'
    >
        <input 
        type="text" 
        placeholder='Search...'
        onChange={(e)=>setSearchTerm(e.target.value)}
        value={searchTerm} 
        className='focus:outline-none w-full' />
        <IconButton onClick={handleSubmit}>
            <Search className='text-red-500'/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar