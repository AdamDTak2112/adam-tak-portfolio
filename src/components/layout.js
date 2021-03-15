import React from "react"

import Header from "./header"
import GlobalStyle from "./globalStyles"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
