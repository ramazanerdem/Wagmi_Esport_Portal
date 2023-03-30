const Statistic = () => {
  return (
    <>
      <div className="mx-4 text-center h-full text-white text-opacity-50">
        <table className="table-auto w-full h-full">
          <thead className="text-2xs h-5">
            <tr className="bg-wagmi-darkgray bg-opacity-90">
              <th className="w-1/12">Rank</th>
              <th className="w-2/12">Map</th>
              <th className="w-1/12">Play Rate</th>
              <th className="w-1/12">Atk Round Win %</th>
              <th className="w-1/12">Def Round Win %</th>
              <th className="w-1/12">Matches</th>
              <th className="w-1/12"></th>
            </tr>
          </thead>
          <tbody className="text-xs">
            <tr className="bg-wagmi-black h-9">
              <td>1</td>
              <td>
                <div className="flex items-center gap-2 ms-6">
                  <div className="w-6 h-6 p-0 rounded-md overflow-hidden bg-white">
                    <img
                      className=""
                      src="https://yt3.ggpht.com/ytc/AL5GRJXI4vEE841AsaWRweFM43m0PPMbaSx7DGqyowX9=s68-c-k-c0x00ffffff-no-rj"
                      alt=""
                    />
                  </div>
                  <p>Lotus</p>
                </div>
              </td>
              <td>14.2%</td>
              <td className="text-green-600">63.7%</td>
              <td>46.3%</td>
              <td>60,330</td>
              <td></td>
            </tr>
            <tr className="h-9">
              <td>2</td>
              <td>
                <div className="flex items-center gap-2 ms-6">
                  <div className="w-6 h-6 p-0 rounded-md overflow-hidden bg-white">
                    <img
                      className=""
                      src="https://yt3.ggpht.com/ytc/AL5GRJU2ixQ9tEoFIRPVkjsVNPR_x1FnzvGL2xKKdn8Amw=s68-c-k-c0x00ffffff-no-rj"
                      alt=""
                    />
                  </div>
                  <p>Pearl</p>
                </div>
              </td>
              <td>14.2%</td>
              <td className="text-green-400">59.7%</td>
              <td>46.3%</td>
              <td>60,330</td>
              <td></td>
            </tr>
            <tr className="bg-wagmi-black h-9">
              <td>3</td>
              <td>
                <div className="flex items-center gap-2 ms-6">
                  <div className="w-6 h-6 p-0 rounded-md overflow-hidden bg-white">
                    <img
                      className=""
                      src="https://yt3.ggpht.com/ytc/AL5GRJWV_idnq18aEzprcxZ6kYptIAReiriHqshytB_j=s68-c-k-c0x00ffffff-no-rj"
                      alt=""
                    />
                  </div>
                  <p>Haven</p>
                </div>
              </td>
              <td>14.2%</td>
              <td className="text-green-200">55.6%</td>
              <td>46.3%</td>
              <td>60,330</td>
              <td></td>
            </tr>
            <tr className="h-9">
              <td>4</td>
              <td>
                <div className="flex items-center gap-2 ms-6">
                  <div className="w-6 h-6 p-0 rounded-md overflow-hidden bg-white">
                    <img
                      className=""
                      src="https://yt3.ggpht.com/ytc/AL5GRJXPBiJlkAblXOFQhmtpMIerg_yk3M1LBLQ1I0PvYw=s68-c-k-c0x00ffffff-no-rj"
                      alt=""
                    />
                  </div>
                  <p>Fracture</p>
                </div>
              </td>
              <td>14.2%</td>
              <td>53.7%</td>
              <td>46.3%</td>
              <td>60,330</td>
              <td></td>
            </tr>
            <tr className="bg-wagmi-black h-9">
              <td>5</td>
              <td>
                <div className="flex items-center gap-2 ms-6">
                  <div className="w-6 h-6 p-0 rounded-md overflow-hidden bg-white">
                    <img
                      className=""
                      src="https://yt3.ggpht.com/ytc/AL5GRJXL9Nb9xZAs9MY4pFWtnLQ-KrdYQbr_qGsxCA1xGg=s68-c-k-c0x00ffffff-no-rj"
                      alt=""
                    />
                  </div>
                  <p>Split</p>
                </div>
              </td>
              <td>14.2%</td>
              <td className="text-red-300">49.9%</td>
              <td>46.3%</td>
              <td>60,330</td>
              <td></td>
            </tr>
            <tr className="h-9">
              <td>6</td>
              <td>
                <div className="flex items-center gap-2 ms-6">
                  <div className="w-6 h-6 p-0 rounded-md overflow-hidden bg-white">
                    <img
                      className=""
                      src="https://yt3.ggpht.com/ytc/AL5GRJVuDbHu2Bfj7Fy-7tMBlrlvIiACf5rHY7k6Rw7EGw=s68-c-k-c0x00ffffff-no-rj"
                      alt=""
                    />
                  </div>
                  <p>Ascent</p>
                </div>
              </td>
              <td>14.2%</td>
              <td className="text-red-500">43.7%</td>
              <td>46.3%</td>
              <td>60,330</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
export default Statistic
