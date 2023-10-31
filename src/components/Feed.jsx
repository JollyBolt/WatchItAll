import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'

const Feed = () => {
  const [selectedCategory,setSelectedCategory] = useState('New')
  const [videos,setVideos] = useState([])
  const [loading,setLoading] = useState(false)

  const getVideos = async()=>{
    setLoading(true)
    const data =await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    setVideos(data.items)
    setLoading(false)
    // console.log(videos)
  }

  useEffect(()=>{
    getVideos()
  },[selectedCategory])
  return (
    <Stack className='flex flex-col md:flex-row'>
      <Box className="h-auto  md:h-[calc(100vh-128px)] mt-2 rounded-xl bg-black text-white p-2 flex flex-col">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography variant='body2' className=' text-xs mt-2 justify-end p-2 hidden md:block'>
          @ Copyright 2023 Ishan Sen
        </Typography>
      </Box>
      <Box className="bg-black h-auto md:h-[calc(100vh-128px)] flex-1 mt-2 md:ml-2 rounded-xl p-3 overflow-y-auto">
        <Typography >
          <span className='text-red-600 text-xl md:text-3xl font-extrabold'>
              <span className='text-white'>{selectedCategory}</span> Videos
          </span>
        </Typography>
        {
          loading
          ?(
            <div className='flex min-h-[60vh] md:min-h-[calc(100%-40px)] justify-center items-center '>
              <ScaleLoader
                loading={loading}
                color='white'
              />
            </div>
          )
          :(<Videos videos={videos}/>)
        }
        {/* <Videos videos={videos}/> */}
      </Box>
    </Stack>
  )
}

export default Feed