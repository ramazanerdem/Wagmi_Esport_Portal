import { Link, NavLink, Outlet } from 'react-router-dom'

import { AiFillSignal } from 'react-icons/ai'
import {
  SiValorant,
  SiCounterstrike,
  SiRiotgames,
  SiEpicgames,
  SiRepublicofgamers,
} from 'react-icons/si'
import { useState } from 'react'

const GameGuide = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <section className={`flex justify-center`}>
      <article className={`${!isOpen && 'hidden'}`}>
        <h4 className="mt-14 mb-5 text-2xl font-semibold">Game Guides</h4>
        <div className="flex flex-col items-center md:items-start gap-10">
          <div className="flex">
            <button className="flex justify-center gap-2 items-center focus:bg-white focus:bg-opacity-20 px-3 py-2 rounded-md">
              <div className="w-5 h-5 bg-red-500 rounded-md flex justify-center items-center text-wagmi-black">
                <SiValorant />
              </div>
              <p className="text-xs">Valorant</p>
            </button>
            <button className="flex justify-center gap-2 items-center focus:bg-white focus:bg-opacity-20 px-3 py-2 rounded-md">
              <div className="w-5 h-5 bg-yellow-500 rounded-md flex justify-center items-center text-wagmi-black">
                <SiCounterstrike />
              </div>
              <p className="text-xs">Coming soon</p>
            </button>
            <button className="flex justify-center gap-2 items-center focus:bg-white focus:bg-opacity-20 px-3 py-2 rounded-md">
              <div className="w-5 h-5 bg-white opacity-20 rounded-md flex justify-center items-center text-wagmi-black">
                <SiRiotgames />
              </div>
            </button>
            <button className="flex justify-center gap-2 items-center focus:bg-white focus:bg-opacity-20 px-3 py-2 rounded-md">
              <div className="w-5 h-5 bg-white opacity-20 rounded-md flex justify-center items-center text-wagmi-black">
                <SiEpicgames />
              </div>
            </button>
            <button className="flex justify-center gap-2 items-center focus:bg-white focus:bg-opacity-20 px-3 py-2 rounded-md">
              <div className="w-5 h-5 bg-white opacity-20 rounded-md flex justify-center items-center text-wagmi-black">
                <SiRepublicofgamers />
              </div>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="px-7 py-6 rounded-xl flex flex-col justify-between bg-white bg-opacity-5 hover:bg-opacity-10 h-44 w-60">
              <AiFillSignal className="text-xl" />
              <div>
                <h4 className="font-bold mb-3">Statistic</h4>
                <p className="text-xs font-normal text-white text-opacity-30">
                  Most popular Agents, Weapons and Maps
                </p>
              </div>
            </div>
            <div className="px-7 py-6 rounded-xl flex flex-col justify-between bg-white bg-opacity-5 hover:bg-opacity-10 h-44 w-60">
              <AiFillSignal className="text-xl" />
              <div className="">
                <div className="font-bold mb-3">
                  <Link onClick={() => setIsOpen(!isOpen)} to="characters">
                    Agents
                  </Link>
                </div>
                <p className="text-xs font-normal text-white text-opacity-30">
                  See ll Agent abilities, lineups, insights and more.
                </p>
              </div>
            </div>
            <div className="px-7 py-6 rounded-xl flex flex-col justify-between bg-white bg-opacity-5 hover:bg-opacity-10 h-44 w-60">
              <AiFillSignal className="text-xl" />
              <div>
                <h4 className="font-bold mb-3">Lineups</h4>
                <p className="text-xs font-normal text-white text-opacity-30">
                  Review the best attacking and defending positions to gain the
                  technical advantage.
                </p>
              </div>
            </div>
            <div className="px-7 py-6 rounded-xl flex flex-col justify-between bg-white bg-opacity-5 hover:bg-opacity-10 h-44 w-60">
              <AiFillSignal className="text-xl" />
              <div>
                <h4 className="font-bold mb-3">Statistic</h4>
                <p className="text-xs font-normal text-white text-opacity-30">
                  See stats for every weapon in the game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Outlet />
    </section>
  )
}
export default GameGuide
