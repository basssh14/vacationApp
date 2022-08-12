import React from "react"

export default function SideBarMenu({ showSideBarMenu, changeSideBarMenu }) {
  /**
   * @desc Menu div on the left side of the screen
   * @access Public
   */

  return (
    /**
     * //////////////////////////////////////////////////
     * Component main div
     *
     * Check the value of the showSideBarMenu variable to hide or show the side menu
     */
    <div
      className={` ${
        showSideBarMenu ? " " : "hidden"
      } h-screen w-2/12 absolute z-50 top-0 right-0 bg-black bg-opacity-70  lg:w-4/12 lg3:w-3/12 md:w-6/12 sm:w-4/5`}
      id="sideBar"
    >
      <div className="relative w-full h-full ">
        {/*
         * ----------------------------------
         * Close button
         */}
        <h3 className="absolute top-170/2 centerHorizontal italianaFont text-2xl text-white hover:text-gray-400">
          <a
            role="button"
            onClick={(e) => {
              changeSideBarMenu(e)
            }}
            className="border border-slate-800 py-2 px-5 rounded-lg bg-slate-800  hover:bg-white hover:text-black"
          >
            CERRAR
          </a>
        </h3>
        {/*
         * ----------------------------------
         * Menu options start div
         */}
        <div className="w-full h-1/2 centerSom bg-black bg-opacity-90 max-h-700px">
          <div className="relative w-full h-full">
            <div className="w-180/2 h-4/5 border-tb border-white centerSom">
              <ul className="w-full h-full divide-y text-white">
                {/*
                 * ----------------------------------
                 * Inicio option
                 */}
                <a href="/" className="">
                  <li className="w-full h-1/5 text-2xl uppercase italianaFont relative border-b border-white menu-shadow rsm:text-xl">
                    <p className="absolute centerSom hover:text-gray-400">
                      Inicio
                    </p>
                  </li>
                </a>
                {/*
                 * ----------------------------------
                 * Lugares option
                 */}
                <a href="/place" className="">
                  <li className="w-full h-1/5 text-2xl uppercase italianaFont relative border-b border-white menu-shadow rsm:text-xl">
                    <p className="absolute centerSom hover:text-gray-400">
                      Lugares
                    </p>
                  </li>
                </a>
                {/*
                 * ----------------------------------
                 * Acerca de option
                 */}
                <a href="#" className="">
                  <li className="w-full h-1/5 text-2xl uppercase italianaFont relative border-b border-white menu-shadow rsm:text-xl">
                    <p className="absolute centerSom hover:text-gray-400">
                      Acerca De
                    </p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
