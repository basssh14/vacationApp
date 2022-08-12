import React from "react"

export default function Footer({ page }) {
  /**
   * @desc Footer div containing the copyright disclaimer and the links to social media
   * @access Public
   */

  return (
    /**
     * //////////////////////////////////////////////////
     * Component main div
     *
     * Uses the "page" variable to dynamically give the height of footer
     * based on the page we are
     */
    <div className={`bg-black w-full  min-h-12 relative basis-12`}>
      {/*
       * ----------------------------------
       * Copyright disclaimer start
       */}
      <h1
        data-testid="footer-copyright"
        className="w-full text-sm text-white absolute centerVertical text-center sm:!text-base rsm:!text-sm rsm:!text-left rsm:!left-4"
      >
        Copyright &copy; 2022
      </h1>
      {/*
       * ----------------------------------
       * Social media icons div start
       */}
      <div className="w-28 h-full float-right  relative">
        <div className="w-20 h-4 absolute left-2 centerVertical  grid grid-cols-3 gap-2 ">
          {/*
           * ----------------------------------
           * Facebook icon
           */}
          <div className="w-full h-5">
            <a href="#" className="w-full h-full">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"
                className="w-full h-full bg-cover"
              />
            </a>
          </div>
          {/*
           * ----------------------------------
           * Instagram icon
           */}
          <div className="w-full h-5">
            <a href="#" className="w-full h-full">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png"
                className="w-full h-full bg-cover"
              />
            </a>
          </div>
          {/*
           * ----------------------------------
           * Whatsapp icon
           */}
          <div className="w-full h-5">
            <a href="#" className="w-full h-full">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/whatsapp.png"
                className="w-full h-full bg-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
