import React from "react"
import "react-multi-carousel/lib/styles.css"
import Header from "../individual/Header"
import Footer from "../individual/Footer"
import Carousel from "react-multi-carousel"
import CarouselItem from "../individual/CarouselItem"

export default function Place() {
  const responsive = {
    desktop: {
      breakpoint: { max: 10000, min: 0 },
      items: 1,
    },
  }
  return (
    <div className="w-full h-full">
      <Header />
      <div className="bg-white w-full h-auto pb-5 pt-0 relative">
        <div className="w-full h-20 relative">
          <h1 className=" italianaFont uppercase text-7xl absolute centerHorizontal -top-4 ">
            Londres
          </h1>
        </div>
        <p className="italianaFont text-xl px-20">
          Pais: Reino Unido <br />
          Poblacion: 70000000 <br />
          Zona Horaria: Europa/Londres <br />
          Temperatura: 20 C <br />
          Humedad: 84 %
        </p>
        <div className="w-180/2 h-100 border-2 border-black mt-3 mx-auto">
          <Carousel
            arrows={true}
            itemClass="carouselItem"
            responsive={responsive}
          >
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </Carousel>
        </div>
        <div className="w-1/2 h-16  mt-5 mx-auto relative">
          <button className="w-48 h-12 text-xl bg-yellow-300 border-2 border-black italianaFont absolute centerVertical float-left rounded-md  hover:bg-white">
            Reservar Hotel
          </button>
          <button className="w-48 h-12 text-xl bg-black border-2 border-black italianaFont absolute centerVertical right-0 text-white rounded-md hover:text-black hover:bg-white hover:border-black">
            Otro Destino
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
