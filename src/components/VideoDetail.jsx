import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { CheckCircle } from '@mui/icons-material'
import Videos from './Videos'
import { ScaleLoader } from 'react-spinners'


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false)

  const { id } = useParams()

  const getVideoDetail = async () => {
    setLoading(true)
    const data = await fetchFromAPI(`videos?part=snippet,contentDetails,statistics&id=${id}`)
    // console.log('calling get video detail')
    setVideoDetail(data.items[0])
    setLoading(false)

  }

  const getRelatedVideos = async () => {
    setLoading(true)
    const data = await fetchFromAPI(`search?part=snippet&type=video&relatedToVideoId=${id}`)
    setVideos(data.items)
    setLoading(false)

  }

  useEffect(() => {
    getVideoDetail()
    getRelatedVideos()
  }, [id])

  if (!videoDetail?.snippet) return (
    <Box className='flex bg-black h-[calc(100vh-128px)] mt-2  rounded-xl p-3 overflow-y-auto justify-center items-center '>
      <ScaleLoader
        loading={loading}
        color='white'
      />
    </Box>
  )
  if(loading) return (
    <Box className='flex bg-black h-[calc(100vh-128px)] mt-2  rounded-xl p-3 overflow-y-auto justify-center items-center '>
      <ScaleLoader
        loading={loading}
        color='white'
      />
    </Box>
  )

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

  return (
    <Box className="bg-black h-[calc(100vh-128px)] mt-2  rounded-xl p-3 overflow-y-auto">
       <Stack className='flex-col lg:flex-row md:justify-between p-4'>
            <Box className="w-full lg:w-[70vw] ">
              <Box className="w-full sticky top-4 justify-center">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  controls
                  className="react-player rounded-xl overflow-hidden"
                />
                <Typography className='text-white p-2 pt-4'>
                  <span className='text-xl font-extrabold '>
                    {title}
                  </span>
                </Typography>
                <Stack className='flex flex-row justify-between p-2'>
                  <Link to={`/channel/${channelId}`}>
                    <Typography className='text-white'>
                      {channelTitle}
                      {/* Channel Title */}
                      <CheckCircle />
                    </Typography>
                  </Link>
                  <Stack className='flex flex-row items-center'>
                    <Typography className='text-gray-400 text-xs mr-2'>
                      {parseInt(viewCount).toLocaleString()} views
                    </Typography>
                    <Typography className='text-gray-400 text-xs'>
                      {parseInt(likeCount).toLocaleString()} likes
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
            <Box >
              <Typography className='text-white p-2 ml-5'>
                <span className='text-2xl  font-extrabold '>
                  Related Videos:
                </span>
              </Typography>
              <Videos videos={videos} />
            </Box>
          </Stack>
    </Box>
  )
}

export default VideoDetail