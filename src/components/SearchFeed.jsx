import { Box, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'


const SearchFeed = () => {
  const [videos,setVideos] = useState([])
  const [loading,setLoading] = useState(false)

  const {searchTerm} = useParams()


  const getVideos = async()=>{
    setLoading(true)
    const data =await fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    setVideos(data.items)
    setLoading(false)
  }
  useEffect(()=>{
    getVideos()
  },[searchTerm])

  return (
    <>
      <Box className="bg-black h-[calc(100vh-105px)] flex-1 mt-2  rounded-xl p-3 overflow-y-auto">
        <Typography >
          <span className='text-red-600 text-xl md:text-3xl font-extrabold'>
              Search Results for <span className='text-white'>"{searchTerm}"</span> Videos
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
      </Box>
    </>
  )
}

export default SearchFeed