import { FaMedal } from 'react-icons/fa'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'

const Score = () => {
  return (
    <div>
      <div className="flex items-center mt-3">
        <FaMedal className="text-yellow-400" />
        <div className="flex justify-between items-center w-full ms-4 text-sm">
          <div className="flex items-center">
            <div className="h-7 w-7 rounded-full overflow-hidden bg-white">
              <img
                src="https://yt3.ggpht.com/ytc/AL5GRJXI4vEE841AsaWRweFM43m0PPMbaSx7DGqyowX9=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <p className="ms-2">You</p>
          </div>
          <div className="flex items-center">
            <p className="me-3">2567</p>
            <AiFillCaretUp className="text-green-600" />
          </div>
        </div>
      </div>
      <hr className="border-white border-opacity-30 mt-3" />
      <div className="flex items-center mt-3">
        <FaMedal className="text-white" />
        <div className="flex justify-between items-center w-full ms-4 text-sm">
          <div className="flex items-center">
            <div className="h-7 w-7 rounded-full overflow-hidden bg-white">
              <img
                src="https://yt3.ggpht.com/ytc/AL5GRJVuDbHu2Bfj7Fy-7tMBlrlvIiACf5rHY7k6Rw7EGw=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <p className="ms-2">Hyper</p>
          </div>
          <div className="flex items-center">
            <p className="me-3">2567</p>
            <AiFillCaretUp className="text-green-600" />
          </div>
        </div>
      </div>
      <hr className="border-white border-opacity-30 mt-3" />
      <div className="flex items-center mt-3">
        <FaMedal className="text-orange-400" />
        <div className="flex justify-between items-center w-full ms-4 text-sm">
          <div className="flex items-center">
            <div className="h-7 w-7 rounded-full overflow-hidden bg-white">
              <img
                src="https://yt3.ggpht.com/ytc/AL5GRJXPBiJlkAblXOFQhmtpMIerg_yk3M1LBLQ1I0PvYw=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <p className="ms-2">Nurdex</p>
          </div>
          <div className="flex items-center">
            <p className="me-3">2567</p>
            <AiFillCaretDown className="text-red-600" />
          </div>
        </div>
      </div>
      <hr className="border-white border-opacity-30 mt-3" />
      <div className="flex items-center mt-3">
        <FaMedal className="text-white text-opacity-10" />
        <div className="flex justify-between items-center w-full ms-4 text-sm">
          <div className="flex items-center">
            <div className="h-7 w-7 rounded-full overflow-hidden bg-white">
              <img
                src="https://yt3.ggpht.com/ytc/AL5GRJXL9Nb9xZAs9MY4pFWtnLQ-KrdYQbr_qGsxCA1xGg=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <p className="ms-2">Plankt</p>
          </div>
          <div className="flex items-center">
            <p className="me-3">2567</p>
            <AiFillCaretUp className="text-green-600" />
          </div>
        </div>
      </div>
      <hr className="border-white border-opacity-30 mt-3" />
      <div className="flex items-center mt-3">
        <FaMedal className="text-white text-opacity-10" />
        <div className="flex justify-between items-center w-full ms-4 text-sm">
          <div className="flex items-center">
            <div className="h-7 w-7 rounded-full overflow-hidden bg-white">
              <img
                src="https://yt3.ggpht.com/ytc/AL5GRJWV_idnq18aEzprcxZ6kYptIAReiriHqshytB_j=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <p className="ms-2">Sam</p>
          </div>
          <div className="flex items-center">
            <p className="me-3">2567</p>
            <AiFillCaretDown className="text-red-600" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Score
