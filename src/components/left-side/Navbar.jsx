import { NavLink } from 'react-router-dom'

import frame from '../../image/Frame.png'
import frameLogo from '../../image/Group.png'
import teamsLogo from '../../image/mt.png'

// icon
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { AiOutlineAppstore } from 'react-icons/ai'
import { RiHome5Line } from 'react-icons/ri'
import { HiOutlineUsers, HiOutlineBookOpen } from 'react-icons/hi'
import { FiFolder } from 'react-icons/fi'
import { CgCloseR } from 'react-icons/cg'

const Navbar = ({ sideBar, setSideBar }) => {
  return (
    <div className="relative py-5 px-3 text-white text-opacity-50">
      <header
        className={`flex ${
          sideBar && 'flex-col gap-8'
        } justify-between items-center`}
      >
        <NavLink to="">
          <img
            className={`${sideBar ? 'w-7' : 'w-24'}`}
            src={sideBar ? frameLogo : frame}
            alt=""
          />
        </NavLink>
        <HiOutlineArrowLeft
          onClick={() => setSideBar(!sideBar)}
          className={`${
            sideBar
              ? 'rotate-180 text-xl absolute left-0 ms-4 md:ms-0 sm:static cursor-pointer'
              : 'absolute right-0 me-3 sm:static text-xl cursor-pointer'
          }`}
        />
      </header>
      {sideBar && <hr className="mb-9 mt-9 mx-auto border-gray-500" />}
      <main className="mt-8 space-y-3 text-sm">
        <NavLink
          onClick={() => setSideBar(true)}
          to=""
          className={`flex gap-4 items-center cursor-pointer hover:bg-gray-800 focus:bg-gray-800 py-2 ${
            !sideBar ? ' px-3' : 'justify-center group'
          } rounded-lg`}
        >
          <RiHome5Line className="text-xl group-focus:text-wagmi-yellow" />
          <p className={`${sideBar && 'hidden'}`}>Home</p>
        </NavLink>
        <NavLink
          onClick={() => setSideBar(true)}
          to="game-guide"
          className={`flex gap-4 items-center cursor-pointer hover:bg-gray-800 focus:bg-gray-800 py-2 ${
            !sideBar ? 'px-3' : 'justify-center group'
          } rounded-lg`}
        >
          <AiOutlineAppstore className="text-xl group-focus:text-wagmi-yellow" />
          <p className={`${sideBar && 'hidden'}`}>Oyun Rehberi</p>
        </NavLink>
        <NavLink
          onClick={() => setSideBar(true)}
          to="crosshair"
          className={`flex gap-4 items-center cursor-pointer hover:bg-gray-800 focus:bg-gray-800 py-2 ${
            !sideBar ? 'px-3' : 'justify-center group'
          } rounded-lg`}
        >
          <HiOutlineUsers className="text-xl group-focus:text-wagmi-yellow" />
          <p className={`${sideBar && 'hidden'}`}>Crosshair</p>
        </NavLink>
        <NavLink
          onClick={() => setSideBar(true)}
          to="comps"
          className={`flex gap-4 items-center cursor-pointer hover:bg-gray-800 focus:bg-gray-800 py-2 ${
            !sideBar ? 'px-3' : 'justify-center group'
          } rounded-lg`}
        >
          <HiOutlineBookOpen className="text-xl group-focus:text-wagmi-yellow" />
          <p className={`${sideBar && 'hidden'}`}>Comps</p>
        </NavLink>
        <NavLink
          onClick={() => setSideBar(true)}
          to="coaching-service"
          className={`flex gap-4 items-center cursor-pointer hover:bg-gray-800 focus:bg-gray-800 py-2 ${
            !sideBar ? 'px-3' : 'justify-center group'
          } rounded-lg`}
        >
          <FiFolder className="text-xl group-focus:text-wagmi-yellow" />
          <p className={`${sideBar && 'hidden'}`}>Koçluk Hizmeti</p>
        </NavLink>
      </main>
      <hr className="mt-9 mx-auto border-gray-500" />
      <div className="relative min-h-screen">
        {/* <article
          className={`${
            sideBar && 'hidden'
          } hidden md:flex md:flex-col p-5 bg-white bg-opacity-10 rounded-xl absolute bottom-96 space-y-2 mx-2`}
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold text-white text-opacity-70">
              Send us Feed Back
            </p>
            <CgCloseR className="text-xl" />
          </div>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="mx-auto">
            <img className="scale-75" src={teamsLogo} alt="" />
          </div>
          <button className="bg-wagmi-yellow text-wagmi-black p-1 rounded-md">
            Feed Back
          </button>
        </article> */}
      </div>
    </div>
  )
}
export default Navbar
