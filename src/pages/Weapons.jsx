import weapon1 from '../image/weapons/Weapons.png'
import weapon2 from '../image/weapons/Weapons (1).png'
import weapon3 from '../image/weapons/Weapons (2).png'
import weapon4 from '../image/weapons/Weapons (3).png'
import weapon5 from '../image/weapons/Weapons (4).png'
import weapon6 from '../image/weapons/Weapons (5).png'
import weapon7 from '../image/weapons/Weapons (6).png'
import weapon8 from '../image/weapons/Weapons (7).png'
import weapon9 from '../image/weapons/Weapons (8).png'
import weapon10 from '../image/weapons/Weapons (9).png'
import weapon11 from '../image/weapons/Weapons (10).png'
import weapon12 from '../image/weapons/Weapons (11).png'
import weapon13 from '../image/weapons/Weapons (12).png'
import weapon14 from '../image/weapons/Weapons (13).png'
import weapon15 from '../image/weapons/Weapons (14).png'

const Weapons = () => {
  return (
    <section className="w-9/12">
      <h4 className="text-2xl font-semibold my-7">Weapons</h4>
      <article className="grid grid-cols-3 gap-7 mb-10">
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-slate-900 via-blue-400 to-red-400 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon1}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Vandal</p>
        </div>
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-slate-900 via-white to-red-400 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon2}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Phantom</p>
        </div>
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-red-900 via-blue-400 to-slate-400 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon3}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Guardian</p>
        </div>
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-slate-900 via-gray-400 to-blue-400 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon4}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Bulldog</p>
        </div>
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-blue-900 via-red-400 to-black blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon5}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Odin</p>
        </div>
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-slate-900 via-blue-400 to-red-400 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon6}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Ares</p>
        </div>
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-black via-slate-400 to-black blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon7}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Bucky</p>
        </div>
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-slate-900 via-red-400 to-blue-400 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon8}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Judge</p>
        </div>
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-slate-900 via-blue-300 to-red-700 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon9}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Classic</p>
        </div>
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-stone-800 via-blue-400 to-white blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon10}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Frenzy</p>
        </div>
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-slate-900 via-red-500 to-blue-400 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon11}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Spectre</p>
        </div>
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-slate-500 via-black to-red-400 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon12}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Sheriff</p>
        </div>
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-slate-900 via-blue-400 to-red-400 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon13}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Stinger</p>
        </div>
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-blue-900 via-slate-400 to-red-400 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon14}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Marshall</p>
        </div>
        <div>
          <div className="relative h-44 group rounded-xl overflow-hidden">
            <div className="h-44 bg-gradient-to-r from-blue-900 via-red-400 to-slate-400 blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <img
              className="absolute top-7 scale-90 group-hover:scale-75 transition-all duration-700"
              src={weapon15}
              alt=""
            />
          </div>
          <p className="mt-2 text-center font-semibold">Operator</p>
        </div>
      </article>
    </section>
  )
}
export default Weapons
