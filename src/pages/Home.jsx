import Score from '../components/right-side/Score'
import Carousel from '../components/right-side/Carousel'
import Statistic from '../components/right-side/Statistic'
import Tournament from '../components/right-side/Tournament'

const Home = () => {
  return (
    <article className="bg-wagmi-black h-full p-5">
      <Carousel />
      <Tournament />
      <div>
        <Statistic />
        <Score />
      </div>
    </article>
  )
}
export default Home
