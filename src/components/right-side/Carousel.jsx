import { useState } from 'react'
import valo1 from '../../image/valo1.jpg'

// images
const img1 =
  'https://i.pinimg.com/originals/1d/46/27/1d4627f8b0a294c5e98e87f6cdbeaa8d.jpg'

const img2 =
  'https://whatifgaming.com/wp-content/uploads/2023/03/Marco-Trindade-Raze-partying.jpeg'

const img3 = 'https://esportbet.com/wp-content/uploads/2022/05/scs.jpg'

const Carousel = () => {
  const [slider, setSlider] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  })
  return (
    <div className="relative overflow-hidden flex flex-col justify-between w-full h-52 sm:h-156 rounded-xl bg-wagmi-darkgray">
      <div className="absolute h-full w-full z-10 flex justify-center items-center">
        <img
          className="w-full"
          src={
            slider.first
              ? valo1
              : slider.second
              ? img1
              : slider.third
              ? img2
              : slider.fourth
              ? img3
              : valo1
          }
          alt=""
        />
      </div>
      <div className="absolute h-156 w-full bg-gradient-to-r from-black to-transparent  z-20"></div>
      <div className="flex flex-col justify-between h-full mt-7 ms-8 z-30">
        <h2 className="text-xl md:text-5xl font-bold w-2/5 leading-snug">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </h2>
        <button className="mb-10 w-32 bg-wagmi-yellow text-black font-semibold rounded-md px-3 md:px-6 py-1 md:py-2 mt-4">
          Sign In
        </button>
      </div>
      <div className="z-20 flex gap-3 mb-7 ms-8">
        <a
          onClick={() =>
            setSlider({
              first: true,
              second: false,
              third: false,
              fourth: false,
            })
          }
          className={`${
            slider.first === true ? 'w-10 bg-wagmi-yellow' : 'w-3 bg-white'
          } h-3 rounded-full transition-all duration-100`}
        ></a>
        <a
          onClick={() =>
            setSlider({
              first: false,
              second: true,
              third: false,
              fourth: false,
            })
          }
          className={`${
            slider.second === true ? 'w-10 bg-wagmi-yellow' : 'w-3 bg-white'
          } h-3 rounded-full transition-all duration-100`}
        ></a>
        <a
          onClick={() =>
            setSlider({
              first: false,
              second: false,
              third: true,
              fourth: false,
            })
          }
          className={`${
            slider.third === true ? 'w-10 bg-wagmi-yellow' : 'w-3 bg-white'
          } h-3 rounded-full transition-all duration-100`}
        ></a>
        <a
          onClick={() =>
            setSlider({
              first: false,
              second: false,
              third: false,
              fourth: true,
            })
          }
          className={`${
            slider.fourth === true ? 'w-10 bg-wagmi-yellow' : 'w-3 bg-white'
          } h-3 rounded-full transition-all duration-100`}
        ></a>
      </div>
    </div>
  )
}
export default Carousel
