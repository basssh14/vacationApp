import React from "react"
import Spinner from "../../Images/spinner.gif"

export default function Loading() {
  /**
   * @desc Spinning wheel animation, used to show that page is loading content
   * @access Public
   */
  return (
    <div>
      <img
        data-testid="loading-image"
        src={Spinner}
        className="w-12 mx-auto mt-5 block"
        alt="Loading.."
      />
    </div>
  )
}
