import React from "react";
import { Link } from "gatsby";
import { createGlobalStyle } from "styled-components";
import { StyledHeader, StyledList, StyledListItem } from './UI/Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <StyledHeader>
        <Link to="/">
          <img src="" alt="Logo" className='logo' />
        </Link>
        <StyledList>
          <StyledListItem>
            <Link to='/' activeClassName='active'>
              About
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link to='/' activeClassName='active'>
              Works
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link to='/' activeClassName='active'>
              Testimonials
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link to='/' activeClassName='active'>
              Clients
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link to='/' activeClassName='active'>
              Blog
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link to='/' activeClassName='active'>
              Contact
            </Link>
          </StyledListItem>
        </StyledList>
      </StyledHeader>
      <main className='page-layout'>
        {children}
      </main>
      <footer>
        <p>todo</p>
      </footer>
    </>
  )
}

export default Layout;
