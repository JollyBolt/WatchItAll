import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'


const ChannelCard = ({ channelDetail,page }) => {
    return (
        <Box className='w-full md:w-[358px] flex flex-col justify-center items-center'>
            <Link to={page==='feed'?`/channel/${channelDetail?.id?.channelId}`:''}>
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high?.url}
                    alt={channelDetail?.snippet?.title}
                    className='h-[11.25rem] w-[11.25rem] rounded-full '
                />
            </Link>
            <Link to={page==='feed'?`/channel/${channelDetail?.id?.channelId}`:''}>
                <CardContent className='flex flex-col justify-center items-center'>
                    <Typography variant='h6' className='text-white'>
                        {channelDetail?.snippet?.title}
                        <CheckCircle className='text-sm ml-1' />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography className='text-white text-xs' >
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard