import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

// component

// layout
import AppLayout from './layouts/AppLayout'
import GameGuideLayout from './layouts/GameGuideLayout'
import LoginLayout from './layouts/LoginLayout'
import RootLayout from './layouts/RootLayout'

// pages
import Home from './pages/Home'
import Comps from './pages/Comps'
import Characters from './pages/Characters'
import Crosshair from './pages/Crosshair'
import CoachingServices from './pages/CoachingServices'
import NotFound from './pages/NotFound'
import GameGuide from './pages/GameGuide'
import RootScreen from './pages/RootScreen'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<RootScreen />} />
      <Route path="login" element={<LoginLayout />} />
      <Route path="home" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="game-guide" element={<GameGuideLayout />}>
          <Route index element={<GameGuide />} />
          <Route path="characters" element={<Characters />} />
        </Route>
        <Route path="crosshair" element={<Crosshair />} />
        <Route path="comps" element={<Comps />} />
        <Route path="coaching-service" element={<CoachingServices />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
