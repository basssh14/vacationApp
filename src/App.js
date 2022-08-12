import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./Components/Layout/Landing"
import Place from "./Components/Layout/Place"

function App() {
  return (
    <div className="w-screen h-screen min-h-screen relative webBgImage max-w-screen m-0">
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
