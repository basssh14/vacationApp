import React, { Fragment, useState } from "react"
import SideBarMenu from "./SideBarMenu"

export default function Header({ page }) {
  /**
   * @desc Header div containing the web logo, menu icon and logic to show/hide the menu
   * @access Public
   */

  /**
   * Contains a true || false value to show or hide the menu
   *
   * @type Boolean
   */
  const [showSideBarMenu, setShowSideBarMenu] = useState(false)

  /**
   * Hide/show the side bar menu from the user view
   * Scroll page to top to the menu can fit in the whole view height
   *
   */
  const changeSideBarMenu = (e) => {
    //Prevent button from firing
    e.preventDefault()
    //Move the page to top position
    window.scrollTo(0, 0)
    //Change the side bar menu value to opposite
    setShowSideBarMenu(!showSideBarMenu)
  }

  return (
    /**
     * //////////////////////////////////////////////////
     * Component main div
     *
     * Uses the "page" variable to dynamically give the height, background color of header
     * based on the page
     */

    <div
      className={`w-full basis-16 px-4 bg-transparent ${
        page === "landing" ? "basis-16 bg-transparent" : " basis-16 bg-white"
      }`}
    >
      {/*
       * ----------------------------------
       * Footer bottom line
       *
       * Uses the "page" variable to dynamically give the line color based on page we're in
       */}

      <div
        className={`w-full h-full bg-transparent px-4 relative border-b-2  min-h-16 ${
          page === "landing" ? "border-white" : "border-black"
        }`}
      >
        {/*
         * ----------------------------------
         * Logo div start
         */}
        <div className="w-auto h-auto  float-left absolute centerVertical">
          {/**
           * Uses the "page" variable to dynamically change the text color
           */}
          <h1
            data-testid="header-logo"
            className={`italianaFont text-4xl  md2:text-3xl sm:text-2xl rsm:text-xl usm:text-lg ${
              page === "landing" ? "text-white" : "text-black"
            }`}
          >
            MisProximasVacaciones
          </h1>
        </div>
        {/*
         * ----------------------------------
         * Menu icon div start
         */}
        <div className="w-2/5 float-right h-full  inline-block  relative">
          <div className="h-full w-20/2 float-right relative md:float-right sm:w-1/6">
            <button
              className="w-full h-full"
              onClick={(e) => changeSideBarMenu(e)}
            >
              <img
                src={`https://img.icons8.com/android/24/${
                  page === "landing" ? "ffffff" : "000000"
                }/menu.png`}
                className="centerSom"
              />
            </button>
          </div>
        </div>
      </div>
      <SideBarMenu
        showSideBarMenu={showSideBarMenu}
        changeSideBarMenu={changeSideBarMenu}
      />
    </div>
  )
}
