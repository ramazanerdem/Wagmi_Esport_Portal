import Score from '../components/right-side/Score'
import Carousel from '../components/right-side/Carousel'
import Statistic from '../components/right-side/Statistic'
import Tournament from '../components/right-side/Tournament'

const Home = () => {
  return (
    <article className="bg-wagmi-black h-full p-5">
      <Carousel />
      <Tournament />
      <div className="flex gap-5 h-96 mt-5">
        <div className="flex flex-col w-2/3 h-80 bg-wagmi-darkgray rounded-xl p-3">
          <div className="flex justify-between items-center mb-5 mx-3">
            <h5 className="text-2xl font-semibold">Your Statistic</h5>
            <p className="text-sm text-wagmi-yellow">{`view all >`}</p>
          </div>
          <Statistic />
        </div>
        <div className="flex flex-col w-1/3 bg-wagmi-darkgray h-80 py-3 px-6 rounded-xl">
          <h5 className="text-2xl font-semibold">Score Board</h5>
          <Score />
        </div>
      </div>
    </article>
  )
}
export default Home
