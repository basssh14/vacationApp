import React from "react"
//Import components
import Footer from "../individual/Footer"
import Header from "../individual/Header"

export default function Landing() {
  /**
   * @route "/"
   * @desc Home page, allow us to click button and go to the places page
   * @access Public
   */
  return (
    /**
     * //////////////////////////////////////////////////
     * Start of component
     */

    <div className="w-full h-full flex flex-col">
      <Header page="landing" />
      <div className="bg-transparent w-full basis-full min-h-96 py-5 px-4">
        <div className=" relative w-full h-full">
          {/*
           * ----------------------------------
           * Middle div with glass effect start
           */}
          <div
            data-testid="glass-mid-div"
            className="h-4/5 w-1/2 centerSom glassEffectCenterDiv pt-10 px-4 md3:w-1/2 sm2:w-3/5 sm1:w-3/5 sm:w-140/2 rsm2:w-full hsm:h-full fn:max-w-800px l3:max-w-700px  lg1:max-w-600px md:!max-h-700px hfn:max-h-700px  rsm:!max-h-80 "
          >
            {/*
             * ----------------------------------
             * Paragraph div start
             */}
            <div className="w-full h-2/3 relative">
              <div className=" h-auto w-full centerSom">
                <p className=" amikoFont font-bold text-7xl text-white text-center fn:text-8xl  lg3:text-6xl md2:text-5xl rsm:text-4xl usm:text-3xl">
                  <span className=" text-orange-500 ">LISTO!</span> PARA TU
                  PROXIMA <span className="underline">AVENTURA</span>
                </p>
              </div>
            </div>
            {/*
             * ----------------------------------
             * Button div Start
             */}
            <div className="w-full h-1/3  relative">
              <div className="w-48 h-14  centerSom">
                <a href="/place" className="w-full h-full">
                  <button className="w-full h-full relative border-black border-2 rounded-lg  bg-black italianaFont text-white text-2xl  buttonHover">
                    Proximo Destino{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
