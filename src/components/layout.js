import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 30px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <StyledHeader>
        <Link to="/" className="home">
          <img src="" alt="Logo" className='logo' />
        </Link>
        <ul>
          <li>
            <Link to='#' className=''>
              About
            </Link>
          </li>
          <li>
            <Link to='#' className=''>
              Works
            </Link>
          </li>
          <li>
            <Link to='#' className=''>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to='#' className=''>
              Clients
            </Link>
          </li>
          <li>
            <Link to='#' className=''>
              Blog
            </Link>
          </li>
          <li>
            <Link to='#' className=''>
              Contact
            </Link>
          </li>
        </ul>
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
