import { useState } from 'react'

// images
const img1 =
  'https://i.pinimg.com/originals/1d/46/27/1d4627f8b0a294c5e98e87f6cdbeaa8d.jpg'

const img2 =
  'https://images.contentstack.io/v3/assets/bltb730eada072bdbf4/bltc8856e600323aadc/62fc22ba40ac42700de69c7f/VCT22_CH_Primer_Article_Header.jpg?width=2472&height=1390'

const img3 = 'https://esportbet.com/wp-content/uploads/2022/05/scs.jpg'

const img4 =
  'https://www.sportsbusinessjournal.com/-/media/Images/TEO/2022/09/VCT-Calendar-MAIN.ashx'

const Carousel = () => {
  const [slider, setSlider] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  })
  return (
    <div className="relative overflow-hidden flex flex-col justify-between w-full h-52 sm:h-96 rounded-xl bg-wagmi-darkgray">
      <div className="absolute h-full w-full z-10 flex justify-center items-center">
        <img
          className="h-fit"
          src={
            slider.first
              ? img1
              : slider.second
              ? img2
              : slider.third
              ? img3
              : slider.fourth
              ? img4
              : img2
          }
          alt=""
        />
      </div>
      <div className="absolute h-156 w-full bg-gradient-to-r from-black to-transparent  z-20"></div>
      <div className="flex flex-col justify-between z-30 p-5 md:p-16">
        <h2 className="text-md md:text-4xl font-bold w-4/6 leading-snug">
          Hyper Front is shutting down – Valorant Mobile clone folds after Riot
          lawsuit
        </h2>
        <button className="absolute bottom-16 md:bottom-32 bg-wagmi-yellow text-black font-semibold text-md md:text-xl rounded-md h-8 w-20 md:h-12 md:w-32 mt-4">
          Sign In
        </button>
      </div>
      <div className="absolute bottom-5 left-5 md:bottom-16 md:left-16 z-20 flex gap-3">
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
            slider.first === true ? 'w-10 bg-wagmi-yellow' : 'w-5 bg-white'
          } h-5 rounded-full transition-all duration-100`}
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
            slider.second === true ? 'w-10 bg-wagmi-yellow' : 'w-5 bg-white'
          } h-5 rounded-full transition-all duration-100`}
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
            slider.third === true ? 'w-10 bg-wagmi-yellow' : 'w-5 bg-white'
          } h-5 rounded-full transition-all duration-100`}
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
            slider.fourth === true ? 'w-10 bg-wagmi-yellow' : 'w-5 bg-white'
          } h-5 rounded-full transition-all duration-100`}
        ></a>
      </div>
    </div>
  )
}
export default Carousel
