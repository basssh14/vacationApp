import { render, screen, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom"
import Landing from "../Layout/Landing"
afterEach(() => {
  cleanup()
})
test("Check the landing elements are rendered", () => {
  render(<Landing />)
  const headerLogo = screen.getByTestId("header-logo")
  const glassMiddleDiv = screen.getByTestId("glass-mid-div")
  const footerCopyright = screen.getByTestId("footer-copyright")
  expect(headerLogo).toBeInTheDocument()
  expect(glassMiddleDiv).toBeInTheDocument()
  expect(footerCopyright).toBeInTheDocument()
})
