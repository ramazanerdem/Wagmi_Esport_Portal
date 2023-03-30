import { TbMessageDots } from 'react-icons/tb'
import { MdNotificationsNone } from 'react-icons/md'

const Search = () => {
  return (
    <div className="flex justify-between items-center h-14 bg-wagmi-black">
      <div></div>
      <input
        className="ms-10 sm:ms-20 h-8 w-52 sm:w-72 p-2 rounded-md text-sm text-white text-opacity-50 bg-white bg-opacity-10 outline-none"
        placeholder="Search..."
        type="text"
      />
      <div className="flex justify-center items-center me-4">
        <TbMessageDots className="me-3 cursor-pointer" />
        <MdNotificationsNone className="me-7 cursor-pointer" />
        <div className="w-8 h-8 bg-blue-300 rounded-full cursor-pointer overflow-hidden">
          <img
            src="https://avatars.githubusercontent.com/u/117930648?s=40&v=4"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
export default Search
