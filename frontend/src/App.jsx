import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SelectCharacter from './pages/SelectCharacter'
import Lobby from './pages/Lobby'
import Play from './pages/Play'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/select-character",
      element: <SelectCharacter/>
    },
    {
      path: "/lobby",
      element: <Lobby/>
    },
    {
      path: "/play",
      element: <Play/>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
