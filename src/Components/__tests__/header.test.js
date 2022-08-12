import { render, screen, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "../individual/Header"
afterEach(() => {
  cleanup()
})
test("Check the logo text color is white if page = landing", () => {
  render(<Header page="landing" />)
  const headerLogo = screen.getByTestId("header-logo")
  expect(headerLogo).toBeInTheDocument()
  expect(headerLogo).toHaveClass("text-white")
})
test("Check the logo text color is black if page = place", () => {
  render(<Header page="place" />)
  const headerLogo = screen.getByTestId("header-logo")
  expect(headerLogo).toBeInTheDocument()
  expect(headerLogo).toHaveClass("text-black")
})
