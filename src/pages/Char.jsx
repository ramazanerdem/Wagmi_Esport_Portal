import background from '../image/background.png'
import jett from '../image/JETT.png'
import jettchar from '../image/jettchar.png'
import jettright from '../image/jettright.png'
import stream from '../image/jett_ultimate.jpg'
import vector from '../image/Vector.png'
import circle from '../image/circle.png'
import play from '../image/play1.png'
import updraft from '../image/updraft.png'
import tailwind from '../image/tailwind.png'
import bladestorm from '../image/bladestorm.png'
import frameplus from '../image/frameplus.png'

const Char = () => {
  return (
    <section className="w-full">
      <header className="relative group w-full h-80 overflow-hidden">
        <img className="w-full h-full" src={background} alt="" />
        <div className="absolute z-10 w-full h-full top-0 bg-red-500 bg-opacity-60"></div>
        <img
          className="absolute scale-75 group-hover:scale-95 transition-all duration-1000 -top-6 -right-36"
          src={jett}
          alt=""
        />
        <img
          className="z-10 absolute scale-75 group-hover:scale-90 transition-all duration-1000 -top-8 -right-10 hidden md:inline"
          src={jettchar}
          alt=""
        />
      </header>
      <main className="w-10/12 mx-auto">
        <div className="flex justify-start">
          <div className="flex flex-col items-center md:items-start md:flex-row gap-5 -mt-56 md:-mt-16">
            <div className="relative z-10 w-80 h-80 rounded-2xl overflow-hidden shadow-black shadow-2xl">
              <div className="absolute w-80 h-80 rounded-2xl bg-gradient-to-b from-red-400 via-gray-900 to-blue-300 blur-2xl"></div>
              <img
                className="absolute scale-90 md:scale-110 hover:scale-100 md:hover:scale-125 transition-all duration-500 -bottom-5 md:bottom-3 left-2"
                src={jettright}
                alt=""
              />
              <img className="absolute right-3 top-3 " src={frameplus} alt="" />
            </div>
            <div className="w-full self-end">
              <p className="text-2xl font-bold mb-2">Jett</p>
              <p className="text-white text-opacity-60">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                nisi veniam maiores fuga debitis ipsa, iusto eius officia soluta
                at est possimus doloribus ex dignissimos commodi enim quod
                expedita sint?
              </p>
              <br />
              <p className="text-white text-opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                culpa perspiciatis inventore eum. Nostrum veniam quas nemo
                dolores quisquam ducimus, ipsam deserunt ea ipsum id molestias
                omnis voluptate consequuntur nihil tempore nulla earum quo?
                Aliquam, facilis ipsam. Sit, unde ab!
              </p>
            </div>
          </div>
        </div>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-24">
          <div className="relative rounded-2xl overflow-hidden">
            <img className="h-full object-cover" src={stream} alt="" />
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src={circle}
              alt=""
            />
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src={play}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-2xl font-bold">Agents Information</p>
            <div className="space-y-6">
              <p>
                <span className="text-white text-opacity-60">Name : </span>Jett
              </p>
              <p>
                <span className="text-white text-opacity-60">Country : </span>
                South Korea
              </p>
              <p>
                <span className="text-white text-opacity-60">
                  Signature Ability :{' '}
                </span>
                Tailwind
              </p>
              <p>
                <span className="text-white text-opacity-60">Abilities : </span>
                Cloudburst, Updraft
              </p>
              <p>
                <span className="text-white text-opacity-60">Ultimate : </span>
                Blade Storm
              </p>
            </div>
          </div>
        </article>
      </main>
      <footer className="w-10/12 mt-16 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center p-5 text-center bg-white bg-opacity-10 hover:bg-opacity-5 rounded-2xl">
          <img className="mt-3" src={vector} alt="" />
          <p className="text-lg font-bold mt-6 mb-2">CLOUDBURST :</p>
          <p className="text-xs font-light">
            Deploys a cloud of smoke that obstructs the enemy's vision. Press
            the skill button a second time to lift the cloud.
          </p>
        </div>
        <div className="flex flex-col items-center p-5 text-center bg-white bg-opacity-10 hover:bg-opacity-5 rounded-2xl">
          <img className="mt-3" src={updraft} alt="" />
          <p className="text-lg font-bold mt-6 mb-2">UPDRAFT :</p>
          <p className="text-xs font-light">Propels you through the air.</p>
        </div>
        <div className="flex flex-col items-center p-5 text-center bg-white bg-opacity-10 hover:bg-opacity-5 rounded-2xl">
          <img className="mt-3" src={tailwind} alt="" />
          <p className="text-lg font-bold mt-6 mb-2">TAILWIND :</p>
          <p className="text-xs font-light">
            Dashes a short distance in the direction you want to go.
          </p>
        </div>
        <div className="flex flex-col items-center p-5 text-center bg-white bg-opacity-10 hover:bg-opacity-5 rounded-2xl">
          <img className="mt-3" src={bladestorm} alt="" />
          <p className="text-lg font-bold mt-6 mb-2">BLADE STORM :</p>
          <p className="text-xs font-light">
            Automatically equips the agent with various throwing knives that one
            shot if you hit the head. Performing a kill restores all the knives.
          </p>
        </div>
      </footer>
    </section>
  )
}
export default Char
