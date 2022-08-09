import React from "react"

export default function Footer({ divAlignment }) {
  return (
    <div
      className={`bg-black w-full h-11 absolute left-0 ${
        divAlignment === "bottom" ? "bottom-0" : ""
      }`}
    >
      <h1 className="w-full text-sm text-white absolute centerVertical text-center sm:!text-base rsm:!text-sm">
        Copyright &copy; 2022
      </h1>
      <div className="w-28 h-full float-right  relative">
        <div className="w-20 h-4 absolute left-2 centerVertical  grid grid-cols-3 gap-2 ">
          <div className="w-full h-5">
            <a href="#" className="w-full h-full">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"
                className="w-full h-full bg-cover"
              />
            </a>
          </div>
          <div className="w-full h-5">
            <a href="#" className="w-full h-full">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png"
                className="w-full h-full bg-cover"
              />
            </a>
          </div>
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
