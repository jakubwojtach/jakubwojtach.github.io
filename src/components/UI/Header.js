import React, { useState } from "react"
import styled from "styled-components"
import { toggleLayoutState } from "../../helpers/utils"

export const PageContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: ${props => (props.justify ? props.justify : "center")};
  align-content: ${props => (props.align ? props.align : "center")};
  @media screen and (max-width: 1200px) {
    margin: 0 20px;
  }
`

export const StyledHeader = styled.header`
  padding: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: all 200ms ease;
  background: ${props => props.theme.headerBgColor};
  .logo {
    transition: all 200ms ease-in;
  }
`

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-weight: 400;
  transition: all 200ms ease;
  &:hover {
    opacity: 0.7;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.headerLinkColor};
    display: block;
    transition: all 200ms ease;

    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: calc(50% - 2.5px);
      bottom: -10px;
      background-color: #15fea5;
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
