import { useState } from 'react'
import { Outlet } from 'react-router-dom'

// components
import Navbar from '../components/left-side/Navbar'
import Search from '../components/right-side/Search'

const RootLayout = () => {
  const [sideBar, setSideBar] = useState(true)

  return (
    <main className="relative flex min-h-screen text-white bg-wagmi-black tracking-wide">
      <section
        className={`${
          sideBar
            ? 'w-0 sm:w-14 transition-all duration-300'
            : 'w-1/2 sm:w-72 transition-all duration-300'
        } bg-wagmi-darkgray fixed top-0 left-0 z-50 h-screen `}
      >
        <Navbar sideBar={sideBar} setSideBar={setSideBar} />
      </section>
      {!sideBar && (
        <section
          onClick={() => setSideBar(!sideBar)}
          className="z-40 absolute w-full h-full sm:w-0 sm:h-0 bg-black bg-opacity-50"
        ></section>
      )}

      <section
        className={`overflow-clip w-full ${
          sideBar
            ? 'sm:ml-14 transition-all duration-300'
            : 'sm:ml-72 transition-all duration-300'
        }`}
      >
        <Search />
        <Outlet sideBar={sideBar} />
      </section>
    </main>
  )
}
export default RootLayout
