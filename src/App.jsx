// component
import Navbar from './components/left-side/Navbar'
import Home from './pages/Home'
import Search from './components/right-side/Search'
import { useState } from 'react'

function App() {
  const [sideBar, setSideBar] = useState(false)
  return (
    <main className="relative flex min-h-screen text-white">
      <section
        className={`${
          sideBar ? 'w-14 -translate-x-10' : 'w-72'
        } duration-300  bg-wagmi-darkgray fixed top-0 left-0 z-40 h-screen transition-transform  sm:translate-x-0`}
      >
        <Navbar sideBar={sideBar} setSideBar={setSideBar} />
      </section>
      <section className={`overflow-clip ${sideBar ? 'ml-14' : 'ml-72'}`}>
        <Search />
        <Home />
      </section>
    </main>
  )
}

export default App
