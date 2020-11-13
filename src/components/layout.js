import styled from "styled-components"
import React, { useReducer } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import "@wordpress/block-library/build-style/style.css"

import reducer from "./reducer"
import Context from "./context"
import { light, dark } from "./themes"
import Header from "./UI/Header"
import Footer from "./UI/Footer"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export const PageContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: ${props => (props.justify ? props.justify : "center")};
  align-content: ${props => (props.align ? props.align : "center")};
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  @media screen and (max-width: 1200px) {
    margin: 0 20px;
  }
`

const Layout = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isDark: true,
  })

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDark ? dark : light}>
        <GlobalStyle />
        <Header isDark={state.isDark} />
        <main className="page-layout">{children}</main>
        <Footer isDark={state.isDark} />
      </ThemeProvider>
    </Context.Provider>
  )
}

export default Layout
