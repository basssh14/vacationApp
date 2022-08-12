import React, { useState } from "react"
import Loading from "./Loading"

export default function CarouselItem({ url }) {
  /**
   * @desc Individual item that contains the image to be used in the carousel
   * @access Public
   */

  /**
   * Contains a true || false value to ensure if image is loaded or not,
   * if its true the image will be displayed but if its false a Loading component will be displayed
   *
   * @type Boolean
   */
  const [imageIsLoaded, setImageIsLoaded] = useState(false)
  /**
   * Change the value of the imageIsLoaded variable, this function will allow us to know when the image is loaded
   *
   */
  const imageLoaded = () => {
    setImageIsLoaded(true)
  }
  return (
    <div className="w-full h-full">
      <img
        style={{ display: imageIsLoaded ? "block" : "none" }}
        className="h-full w-full"
        onLoad={imageLoaded}
        src={url}
      />
      {!imageIsLoaded && <Loading />}
    </div>
  )
}
