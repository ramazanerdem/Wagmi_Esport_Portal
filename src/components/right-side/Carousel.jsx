import valo1 from '../../image/valo1.jpg'

const Carousel = () => {
  return (
    <div className="relative container overflow-hidden flex flex-col justify-between w-full h-96 rounded-xl bg-red-800">
      <div className="absolute h-full m-0 z-10 flex justify-center items-center">
        <img className="" src={valo1} alt="" />
      </div>
      <div className="absolute h-96 w-full bg-gradient-to-r from-black to-transparent  z-20"></div>
      <div className="mt-7 ms-8 z-30">
        <h2 className="text-5xl font-bold w-4/5 leading-snug">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </h2>
        <button className="bg-wagmi-yellow text-black font-semibold rounded-md px-6 py-2 mt-4">
          Sign In
        </button>
      </div>
      <div className="z-20 flex gap-3 mb-7 ms-8">
        <div className="w-3 h-3 rounded-full bg-white"></div>
        <div className="w-3 h-3 rounded-full bg-white"></div>
        <div className="w-10 h-3 rounded-full bg-wagmi-yellow"></div>
        <div className="w-3 h-3 rounded-full bg-white"></div>
      </div>
    </div>
  )
}
export default Carousel
