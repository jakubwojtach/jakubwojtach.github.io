import React, { useReducer } from "react"
import { Link } from "gatsby"
import reducer from "./reducer"
import Context from "./context"
import { light, dark } from "./themes"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import {
  StyledHeader,
  StyledList,
  StyledListItem,
  PageContainer,
} from "./UI/Header"
import Switch from "./UI/Switch"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const Layout = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isDark: false,
  })

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDark ? dark : light}>
        <GlobalStyle />
        <StyledHeader>
          <PageContainer justify="space-between">
            <Link to="/">
              <img
                src={state.isDark ? "/logo.svg" : "/logo-dark.svg"}
                alt="Logo"
                className="logo"
              />
            </Link>
            <StyledList>
              <StyledListItem>
                <Link to="/" activeClassName="active">
                  About
                </Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/" activeClassName="active">
                  Projects/Clients
                </Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/" activeClassName="active">
                  Blog
                </Link>
              </StyledListItem>
              <StyledListItem>
                <Link to="/" activeClassName="active">
                  Contact
                </Link>
              </StyledListItem>
              <div className="header-separator" />
            </StyledList>
            <Switch />
          </PageContainer>
        </StyledHeader>
        <main className="page-layout">{children}</main>
        <footer>
          <p>todo</p>
        </footer>
      </ThemeProvider>
    </Context.Provider>
  )
}

export default Layout
