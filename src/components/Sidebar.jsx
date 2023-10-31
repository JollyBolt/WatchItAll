import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'


const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack
    direction="row"
    className=' md:flex-col h-auto md:h-[95%] overflow-y-auto p-1'
    >
        {
            categories.map((category, idx)=>(
                <button 
                key={idx}
                onClick={()=>setSelectedCategory(category.name)}
                className={`flex items-center ${category.name===selectedCategory?'bg-red-600':'hover:bg-red-500'} rounded-2xl  md:rounded-full p-3 md:p-3 m-1 group text-xs md:text-base`}>
                    <span className={`mr-2 md:mr-4 ${category.name===selectedCategory?'text-white':'text-red-600'}  group-hover:text-white`}>
                        {category.icon}
                    </span>
                    <span>
                        {category.name}
                    </span>
                </button>
            ))
        }
    </Stack>
  )
}

export default Sidebar