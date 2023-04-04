import { Outlet } from 'react-router-dom'

const GameGuideLayout = () => {
  return (
    <div className="flex justify-center">
      <Outlet />
    </div>
  )
}
export default GameGuideLayout
