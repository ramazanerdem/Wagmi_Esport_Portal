import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { useState } from 'react'

// component

// layout
import RootLayout from './layouts/RootLayout'
import GameGuideLayout from './pages/GameGuideLayout'

// pages
import Home from './pages/Home'
import Comps from './pages/Comps'
import Login from './pages/Login'
import Characters from './pages/Characters'
import Crosshair from './pages/Crosshair'
import CoachingServices from './pages/CoachingServices'
import NotFound from './pages/NotFound'
import GameGuide from './pages/GameGuide'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Home />}>
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="game-guide" element={<GameGuideLayout />}>
        <Route index element={<GameGuide />} />
        <Route path="characters" element={<Characters />} />
      </Route>
      <Route path="crosshair" element={<Crosshair />} />
      <Route path="comps" element={<Comps />} />
      <Route path="coaching-service" element={<CoachingServices />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
