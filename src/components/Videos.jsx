import { Stack,Box } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos}) => {
  if(!videos) return 'Loading...'
  return (
    <Stack 
    direction='row'
    className='flex flex-wrap p-3 gap-4 justify-center '
    >
    {videos.map((item,idx)=>(
            <Box
            key={idx}
            className="text-white "
            >
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
        ))
    }
    
    </Stack>
  )
}

export default Videos