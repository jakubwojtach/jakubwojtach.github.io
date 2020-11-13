import styled from "styled-components"
import React from "react"
import { PageContainer } from "../layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Switch from "./Switch"

export const StyledHeader = styled.header`
  padding: 30px;
  width: calc(100% - 60px);
  display: flex;
  justify-content: center;
  transition: all 200ms ease;
  background: ${props => props.theme.headerFooterBgColor};
  .logo {
    transition: all 200ms ease-in;
  }
`

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 110px;
  .header-separator {
    width: 1px;
    height: 25px;
    background-color: #34384b;
    margin: auto 20px;
  }
`

export const StyledListItem = styled.li`
  font-size: 15px;
  line-height: 16px;
  margin: 0 10px;
  font-family: "PT Sans";
  -webkit-font-smoothing: antialiased;
  transition: all 200ms ease;
  &:hover {
    opacity: 0.7;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.textIndicatorColor};
    display: block;
    transition: all 200ms ease;

    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: calc(50% - 2.5px);
      bottom: -10px;
      background-color: ${props => props.theme.headerActiveLinkColor};
      border-radius: 50%;
      width: 5px;
      height: 5px;
      transform: translate3d(0, -5px, 0);
      opacity: 0;
      transition: opacity 200ms ease, transform 300ms ease-in;
    }
    &.active {
      color: ${props => props.theme.headerActiveLinkColor};
      &:after {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }
  }
`

const Header = ({ isDark }) => {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        generalSettings {
          title
          url
        }
        menu(id: "dGVybToy") {
          menuItems {
            nodes {
              id
              url
              label
            }
          }
        }
      }
    }
  `)

  const { title, url } = data.wpgraphql.generalSettings
  const items = data.wpgraphql.menu.menuItems.nodes.map(el => ({
    ...el,
    url: el.url.replace(url, ""),
  }))

  return (
    <StyledHeader>
      <PageContainer justify="space-between">
        <Link to="/">
          <img
            src={isDark ? "/logo.svg" : "/logo-dark.svg"}
            alt={title}
            className="logo"
          />
        </Link>
        <StyledList>
          {items.map(item => (
            <StyledListItem>
              <Link to={item.url} activeClassName="active" key={item.id}>
                {item.label}
              </Link>
            </StyledListItem>
          ))}
          <div className="header-separator" />
          <Switch />
        </StyledList>
      </PageContainer>
    </StyledHeader>
  )
}

export default Header
