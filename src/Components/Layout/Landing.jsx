import React from "react"
import Footer from "../individual/Footer"
import Header from "../individual/Header"

export default function Landing() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="bg-white w-full h-170/2 py-5">
        <div className=" relative w-full h-full border-2 border-black bgVacationImage ">
          <div className="h-full w-1/2 absolute centerHorizontal bg-white/30 backdrop-blur-sm pt-5 px-4">
            <div className="w-full h-4/5 relative">
              <p className="nunitoFont text-9/2xl text-black">
                Dejanos <br /> elegir tu <br /> proximo destino <br /> de{" "}
                <span className="text-white underline">Verano</span>
              </p>{" "}
              <div className="w-96 h-52 border-l-4 border-black absolute top-2 right-0"></div>
              <div className="w-90 h-28 border-b-4 border-black absolute top-2 right-4"></div>
            </div>
            <div className=" w-72 h-12 absolute centerHorizontal mt-5">
              <a href="/place" className="w-full h-full">
                <button className="w-full h-full relative border-black border-2 rounded-lg  bg-black italianaFont text-white text-2xl  buttonHover">
                  Proximo Destino{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer divAlignment="bottom" />
    </div>
  )
}
