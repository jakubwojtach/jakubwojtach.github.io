import styled from "styled-components"
import React from "react"
import { PageContainer } from "../layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const StyledFooter = styled.footer`
  padding: 75px 0 45px;
  display: flex;
  justify-content: center;
  transition: all 200ms ease;
  background: ${props => props.theme.headerFooterBgColor};
`

const FooterLine = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
`

const FooterAdvertText = styled.h2`
  text-align: center;
  margin: 0 auto;
  align-self: center;
  font-family: "Montserrat";
  letter-spacing: 0.89px;
  font-weight: bold;
  color: ${props => props.theme.textIndicatorColor};
  font-size: 35px;
  line-height: 43px;
`

const FooterCTA = styled.button`
  width: 160px;
  height: 50px;
  border-radius: 4px;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.soGnareBlue};
  text-align: center;
  font-family: "PT Sans";
  font-weight: 700;
  border: 0;
  transition: all 200ms ease;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.soGnareGreen};
    color: ${props => props.theme.soGnareBlue};
  }
`

const FooterNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-top: 50px;
  padding: 0;
`

const FooterNavItem = styled.li`
  font-size: 12px;
  line-height: 16px;
  font-family: "PT Sans";
  -webkit-font-smoothing: antialiased;
  transition: all 200ms ease;
  text-transform: uppercase;
  margin: 0 10px;
  &:hover {
    opacity: 0.7;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.textIndicatorColor};
    display: block;
    transition: all 200ms ease;
    &.active {
      color: ${props => props.theme.headerActiveLinkColor};
    }
  }
`

const FooterCopyrights = styled.p`
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.65px;
  color: #454a5f;
  margin-top: 25px;
`

const Footer = ({ isDark }) => {
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
    <StyledFooter>
      <PageContainer justify="space-between" direction="column">
        <FooterLine>
          <Link to="/">
            <img
              src={isDark ? "/logo.svg" : "/logo-dark.svg"}
              alt={title}
              className="logo"
            />
          </Link>
          <FooterAdvertText>Let’s Work Together!</FooterAdvertText>
          <FooterCTA>Let's Chat</FooterCTA>
        </FooterLine>
        <FooterLine>
          <FooterNav>
            {items.map(item => (
              <FooterNavItem>
                <Link
                  to={item.url}
                  activeClassName="active"
                  key={`footer-${item.id}`}
                >
                  {item.label}
                </Link>
              </FooterNavItem>
            ))}
          </FooterNav>
        </FooterLine>
        <FooterLine>
          <FooterCopyrights>
            {`© ${new Date().getFullYear()} SoGnare Jakub Wojtach, NIP: 8513109054`}
          </FooterCopyrights>
        </FooterLine>
      </PageContainer>
    </StyledFooter>
  )
}
export default Footer
