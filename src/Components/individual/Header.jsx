import React from "react"

export default function Header() {
  return (
    <div className="w-full h-16 bg-white px-4 relative border-b-2 border-black">
      <div className="w-auto h-auto  float-left absolute centerVertical">
        <h1 className="italianaFont text-4xl text-black sm:text-2xl rsm:text-base usm:text-small">
          MisProximasVacaciones
        </h1>
      </div>
      <div className="w-2/5 float-right h-full  inline-block  relative">
        <div className="h-full w-20/2 float-right relative md:float-right sm:w-1/6">
          <img
            src="https://img.icons8.com/android/24/000000/menu.png"
            className="centerSom"
          />
        </div>
      </div>
    </div>
  )
}
