import { Outlet } from 'react-router-dom'

const GameGuideLayout = () => {
  return (
    <section className="flex justify-center">
      <Outlet />
    </section>
  )
}
export default GameGuideLayout
