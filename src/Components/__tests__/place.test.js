import { render, screen, cleanup, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Place from "../Layout/Place"
afterEach(() => {
  cleanup()
})
test("Check loading gif plays until data is loaded", () => {
  render(<Place />)
  const loadingImage = screen.getByTestId("loading-image")
  expect(loadingImage).toBeInTheDocument()
})
