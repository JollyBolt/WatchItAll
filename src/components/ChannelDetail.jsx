import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { Box } from '@mui/material'
import { ScaleLoader } from 'react-spinners'


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false)

  const { id } = useParams()

  const getChannelDetails = async () => {
    setLoading(true)

    const data = await fetchFromAPI(`channels?part=snippet&id=${id}`)
    setChannelDetail(data.items[0])
    setLoading(false)

  }

  const getVideos = async () => {
    setLoading(true)
    const data = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    setVideos(data.items)
    setLoading(false)

  }

  useEffect(() => {
    getChannelDetails()
    getVideos()
  }, [id])
  return (
    <>
      <Box className="h-[calc(100vh-128px)] bg-black mt-2 rounded-xl overflow-y-auto">
        <div className='w-full h-[200px] bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-t-xl' />
        {
          loading
            ? (
              <div className='flex min-h-[60vh] md:min-h-[calc(100%-40px)] justify-center items-center '>
                <ScaleLoader
                  loading={loading}
                  color='white'
                />
              </div>
            )
            : (<>
              <Box className='md:w-[358px] mx-auto -mt-[90px]'>
                <ChannelCard channelDetail={channelDetail} />
              </Box>
              <Videos videos={videos} />
            </>
            )

        }


      </Box>
    </>
  )
}

export default ChannelDetail