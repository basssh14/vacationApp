import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./Components/Layout/Landing"
import Place from "./Components/Layout/Place"

function App() {
  return (
    <div className="w-screen h-screen px-4 bg-white relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/place" element={<Place />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
