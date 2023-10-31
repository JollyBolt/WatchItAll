import './App.css'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import { Box } from '@mui/material'
import RootLayout from './layouts/RootLayout'
import Feed from './components/Feed'
import SearchFeed from './components/SearchFeed'
import ChannelDetail from './components/ChannelDetail'
import VideoDetail from './components/VideoDetail'


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Feed/>}/>
            <Route path='/video/:id' element={<VideoDetail/>}/>
            <Route path='/channel/:id' element={<ChannelDetail/>}/>
            <Route path='search/:searchTerm' element={<SearchFeed/>}/>

        </Route>
      </>
    )
  )

  return (
    <>
      <Box >
        <RouterProvider router={router} />
      </Box>
    </>
  )
}

export default App
