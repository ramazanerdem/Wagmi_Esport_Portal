import { TbMessageDots } from 'react-icons/tb'
import { MdNotificationsNone } from 'react-icons/md'

const Search = () => {
  return (
    <div className="flex justify-between items-center h-14 bg-gray-900">
      <div></div>
      <input
        className="h-8 w-64 p-2 rounded-sm text-sm bg-gray-600 outline-none"
        placeholder="Search..."
        type="text"
      />
      <div className="flex justify-center items-center me-4">
        <TbMessageDots className="me-3 cursor-pointer" />
        <MdNotificationsNone className="me-7 cursor-pointer" />
        <div className="w-8 h-8 bg-blue-300 rounded-full cursor-pointer"></div>
      </div>
    </div>
  )
}
export default Search
