
import './App.css'
import {createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom'
import Home from './components/Pages/Home'
import Navbar from './components/Pages/Navbar'
import VideoToImage from './components/CompressFile/VideoToImage'
import ImageCompressor from './components/CompressFile/ImageCompressor'


function App() {
  const Router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar></Navbar><Outlet /></>,
      children:[
        {
          index:true,
          element :<Home></Home>
        },

        {
          path:'video-to-image',
          element :<VideoToImage></VideoToImage>
        },

        {
          path:'image-compressor',
          element :<ImageCompressor></ImageCompressor>
        }
      ] 
    }
  ])

  return (
    <>
    
    <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
