import { TbMessageDots, TbSearch } from 'react-icons/tb'
import { MdNotificationsNone } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Search = () => {
  return (
    <div className="flex justify-end gap-4 md:gap-110 items-center h-14 bg-wagmi-midblack">
      <div className="relative">
        <input
          className="h-8 w-48 sm:w-80 p-2 rounded-md text-sm text-white text-opacity-50 bg-white bg-opacity-10 outline-none"
          placeholder="Search..."
          type="text"
        />
        <TbSearch className="absolute right-2 top-2 text-white text-opacity-20" />
      </div>
      <div className="flex gap-2 me-4 justify-center items-center text-xl">
        <TbMessageDots className="cursor-pointer text-white text-opacity-70" />
        <MdNotificationsNone className="cursor-pointer text-white text-opacity-70" />
        <div className="w-8 h-8 bg-blue-300 rounded-full cursor-pointer overflow-hidden">
          <NavLink to="login">
            <img
              src="https://avatars.githubusercontent.com/u/117930648?s=40&v=4"
              alt=""
            />
          </NavLink>
        </div>
      </div>
    </div>
  )
}
export default Search
