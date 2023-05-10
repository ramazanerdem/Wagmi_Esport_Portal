import { NavLink } from 'react-router-dom'
import logo from '../image/Group.png'
import valo from '../image/valo1.jpg'

const RootScreen = () => {
  return (
    <section className="relative overflow-hidden bg-wagmi-black bg-opacity-80 text-white min-h-screen flex flex-col items-center pt-20">
      <img
        src={valo}
        alt=""
        className="absolute top-0 -z-10 h-full w-full object-cover"
      />
      <div className="bg-gradient-radial from-black via-transparent to-transparent w-68 h-68 flex justify-center items-center rounded-full animate-pulse -mt-20 md:mt-0">
        <img className="w-16" src={logo} alt="" />
      </div>
      <p className="text-2xl md:text-5xl font-bold -mt-5 md:mt-0 mb-10 w-2/6 text-center leading-tight">
        Welcome to <span className="text-wagmi-yellow">Wagmi</span> Game Portal
      </p>
      <div className="flex gap-10 font-semibold">
        <NavLink to="home">
          <button className="bg-wagmi-yellow text-wagmi-black hover:bg-wagmi-black hover:text-wagmi-yellow w-24 h-8 rounded-md shadow-black shadow-3xl transition-all duration-300">
            Open Site
          </button>
        </NavLink>
        <a href="https://wagmi-login-page.netlify.app/">
          <button className="bg-wagmi-yellow hover:bg-wagmi-black hover:text-wagmi-yellow text-wagmi-black w-24 h-8 rounded-md shadow-black shadow-3xl transition-all duration-300">
            Login
          </button>
        </a>
      </div>
    </section>
  )
}
export default RootScreen
