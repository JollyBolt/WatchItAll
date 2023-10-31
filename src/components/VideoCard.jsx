import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <>
            <Card className='w-full md:w-[358px] border-none bg-black'>
                <Link to={`/video/${videoId}`}>
                    <CardMedia
                        image={snippet?.thumbnails?.high?.url? snippet?.thumbnails?.high?.url: `https://picsum.photos/358/180`}
                        // image={`https://picsum.photos/358/180`}
                        alt={snippet?.title}
                        className='h-[180px] rounded-xl' />
                </Link>
                <CardContent className='bg-black '>
                    <Link to={`/video/${videoId}`}>
                        <Typography variant='subtitle1' className='text-white font-bold'>
                            {snippet?.title.slice(0, 70)}{snippet?.title.length > 60 ? '...' : ''}
                        </Typography>
                    </Link>
                    <Link to={`/channel/${snippet?.channelId}`}>
                        <Typography
                            variant='subtitle2'
                            className='text-gray-500'>
                            {snippet?.channelTitle}
                            <CheckCircle className='text-sm ml-1' />
                        </Typography>
                    </Link>
                </CardContent>
            </Card>
        </>
    )
}

export default VideoCard