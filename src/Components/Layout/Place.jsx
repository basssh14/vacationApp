import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import "react-multi-carousel/lib/styles.css"
//Import components
import Header from "../individual/Header"
import Footer from "../individual/Footer"
import Loading from "../individual/Loading"
import Carousel from "react-multi-carousel"
import CarouselItem from "../individual/CarouselItem"
//JSON data
//Contains the cities information such as id and name to use them for the API's call
import citiesData from "../../information/cities.json"
//Contains the api unique information such as Keys
import serverData from "../../information/server.json"

export default function Place() {
  /**
   * @route "/place"
   * @desc Place page, give us the information and photos of a random city around the world
   * @access Public
   */

  // -----------------Variables------------------------
  /**
   * Contains the response object (images URLS) from the photos API call
   *
   * @type object
   */

  const [photos, setPhotos] = useState()

  /**
   * Contains the response object (temperature, humidity) from the weather API call
   *
   * @type object
   */

  const [weather, setWeather] = useState()

  /**
   * Contains the response object (population, timezone) from the city information API call
   *
   * @type object
   */

  const [info, setInfo] = useState()

  /**
   * Contains a specific word ("largeImageURL" || "webformatURL") to target the right image size to load based on screen width
   *
   * @type string
   */

  const [imageSize, setImageSize] = useState()

  /**
   * Contains the array position of the last city (from the citiesData file) used ,
   * necessary to avoid repeating the last city user already saw
   *
   * useRef needed to maintain the data value over renders
   *
   * @type number
   */

  let lastRandomNumber = useRef(null)

  // -----------------Functions------------------------

  /**
   * @desc Give a random number between citiesData array length to choose a random citiesData array item
   * @return number
   */

  const getRandomNumber = () => {
    let number = Math.floor(Math.random() * citiesData.length)
    while (number === lastRandomNumber.current) {
      number = Math.floor(Math.random() * citiesData.length)
    }
    lastRandomNumber.current = number
    return number
  }

  /**
   * @desc Function that handles all the API calls logic and data
   */

  const getPlaceInformation = async () => {
    //Clean all the state values from previous call

    setPhotos(undefined)
    setInfo(undefined)
    setWeather(undefined)

    //Optimize image load based on screen width

    const screenWidth = window.innerWidth
    screenWidth >= 600
      ? setImageSize("largeImageURL")
      : setImageSize("webformatURL")

    //Select a random city from the citiesData

    const randomCity = citiesData[getRandomNumber()]

    //----------------------------------------------------------
    //Get the images of city

    const photosOfPlace = await axios.get(
      `https://pixabay.com/api/?key=${serverData.photos}&q=${randomCity.name}&image_type=photo&orientation=horizontal&per_page=3`
    )
    setPhotos(photosOfPlace.data)

    //----------------------------------------------------------
    //Get the weather of city

    const weatherOfPlace = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${randomCity.name}&units=metric&appid=${serverData.weather}`
    )
    setWeather({
      description: weatherOfPlace.data.weather[0].description,
      temp: weatherOfPlace.data.main.temp,
      humidity: weatherOfPlace.data.main.humidity,
    })

    //----------------------------------------------------------
    //Get the information of place

    const infoOfPlace = await axios.get(
      `https://api.teleport.org/api/cities/${randomCity.id}`
    )
    setInfo({
      country: randomCity.country,
      timezone: infoOfPlace.data._links["city:timezone"].name,
      population: infoOfPlace.data.population,
      city: randomCity.name,
    })
  }

  /**
   * @desc Call the getPlaceInformation() function on first page render
   */
  //
  useEffect(() => {
    getPlaceInformation()
  }, [])

  /**
   * @desc Displays 1 item on the carousel
   */

  const responsive = {
    desktop: {
      breakpoint: { max: 10000, min: 0 },
      items: 1,
    },
  }

  return (
    /**
     * //////////////////////////////////////////////////
     * Start of component
     */
    <div className="w-full h-full flex flex-col min-h-screen bg-white">
      <Header />
      {/*
       * ----------------------------------
       * Checks if all of the apis give a success full response and renders the object, otherwise it will display a
       * loading component
       */}
      {photos && info && weather !== undefined ? (
        <div className="flex-1">
          <div className="bg-white w-full h-auto pb-5 pt-0 relative  sm:px-1">
            {/*
             * ----------------------------------
             * City name title
             */}

            <div className="w-full h-20 relative">
              <h1
                data-testid="city-name-title"
                className=" italianaFont uppercase text-7xl absolute centerHorizontal -top-4 rsm:text-6xl usm:text-5xl rsm:top-0"
              >
                {info.city}
              </h1>
            </div>
            {/*
             * ----------------------------------
             * City information div start
             */}

            <p className="italianaFont text-2xl px-20 sm2:text-xl sm2:w-full sm2:text-center sm2:mt-4 sm2:mb-5 rsm:px-5 usm:-mt-2 usm:px-2">
              País: {info.country} <br />
              Población: {info.population} <br />
              Zona Horaria: {info.timezone} <br />
              Temperatura: {weather.temp} C <br />
              Humedad: {weather.humidity} %
            </p>

            {/*
             * ----------------------------------
             * City carousel images div start
             */}

            <div className="w-3/5 border-2 border-black mt-3 mx-auto sm2:w-3/4 sm:w-full">
              <Carousel
                key={"carousel"}
                arrows={true}
                itemClass="carouselItem"
                responsive={responsive}
              >
                {/*
                 * ----------------------------------
                 * Loop through all of the city photos and pass the url to the carouselitem component to render them
                 */}
                {photos.hits.map((photo, index) => (
                  <CarouselItem key={index} url={photo[imageSize]} />
                ))}
              </Carousel>
            </div>
            {/*
             * ----------------------------------
             * Bottom buttons div start
             */}
            <div className="w-full h-auto  mt-5 mx-auto grid grid-cols-2 gap-20 sm:gap-5 rsm:gap-3">
              <div className="w-full h-14">
                <button className="w-52 h-14 text-xl bg-yellow-300 border-2 border-black italianaFont float-right rounded-md  hover:bg-white sm2:w-48 sm:gap-5 sm:w-40 rsm:w-32 rsm:text-lg">
                  Reservar Hotel
                </button>
              </div>
              <div className="w-full h-14">
                <button
                  data-testid="button-change-city"
                  className="w-52 h-14 text-xl bg-black border-2 border-black italianaFont float-left text-white rounded-md hover:text-black hover:bg-white hover:border-black sm2:w-48 sm:gap-5 sm:w-40 rsm:w-32 rsm:text-lg"
                  onClick={() => getPlaceInformation()}
                >
                  Otro Destino
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1">
          <Loading />
        </div>
      )}
      <Footer />
    </div>
  )
}
