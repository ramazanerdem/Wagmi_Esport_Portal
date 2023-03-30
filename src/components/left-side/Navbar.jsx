import frame from '../../image/Frame.png'
import frameLogo from '../../image/Group.png'
import arrowLeft from '../../image/icon/arrow-left.png'

// icon
import { FaBeer } from 'react-icons/fa'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { AiOutlineAppstore } from 'react-icons/ai'
import { RiHome5Line } from 'react-icons/ri'
import { HiOutlineUsers, HiOutlineBookOpen } from 'react-icons/hi'
import { FiFolder } from 'react-icons/fi'

const Navbar = ({ sideBar, setSideBar }) => {
  return (
    <div className="py-5 px-4 text-gray-400">
      <header
        className={`flex ${
          sideBar && 'flex-col gap-8'
        } justify-between items-center`}
      >
        <img
          className={`${sideBar ? '' : 'w-24'}`}
          src={sideBar ? frameLogo : frame}
          alt=""
        />
        <HiOutlineArrowLeft
          onClick={() => setSideBar(!sideBar)}
          className={`${sideBar && ' rotate-180'} text-xl cursor-pointer`}
        />
      </header>
      {sideBar && <hr className="mt-9 mx-auto border-gray-500" />}
      <main className="mt-8 space-y-3 text-sm">
        <div
          className={`flex gap-4 items-center cursor-pointer hover:bg-gray-800 active:bg-gray-600 ${
            !sideBar ? 'py-2 px-3' : 'justify-center'
          } rounded-lg`}
        >
          <RiHome5Line className="text-xl" />
          <p className={`${sideBar && 'hidden'}`}>Home</p>
        </div>
        <div
          className={`flex gap-4 items-center cursor-pointer hover:bg-gray-800 active:bg-gray-600 py-2 ${
            !sideBar ? 'px-3' : 'justify-center'
          } rounded-lg`}
        >
          <AiOutlineAppstore className="text-xl" />
          <p className={`${sideBar && 'hidden'}`}>Oyun Rehberi</p>
        </div>
        <div
          className={`flex gap-4 items-center cursor-pointer hover:bg-gray-800 active:bg-gray-600 py-2 ${
            !sideBar ? 'px-3' : 'justify-center'
          } rounded-lg`}
        >
          <HiOutlineUsers className="text-xl" />
          <p className={`${sideBar && 'hidden'}`}>Crosshair</p>
        </div>
        <div
          className={`flex gap-4 items-center cursor-pointer hover:bg-gray-800 active:bg-gray-600 py-2 ${
            !sideBar ? 'px-3' : 'justify-center'
          } rounded-lg`}
        >
          <HiOutlineBookOpen className="text-xl" />
          <p className={`${sideBar && 'hidden'}`}>Comps</p>
        </div>
        <div
          className={`flex gap-4 items-center cursor-pointer hover:bg-gray-800 active:bg-gray-600 py-2 ${
            !sideBar ? 'px-3' : 'justify-center'
          } rounded-lg`}
        >
          <FiFolder className="text-xl" />
          <p className={`${sideBar && 'hidden'}`}>Koçluk Hizmeti</p>
        </div>
      </main>
      <hr className="mt-9 mx-auto border-gray-500" />
      <article></article>
    </div>
  )
}
export default Navbar
