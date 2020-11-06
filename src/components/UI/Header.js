import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 30px;
  background: linear-gradient(180deg, #1E2233 0%, #2D2F4A 100%);
`;

export const StyledList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`;

export const StyledListItem = styled.li`
    font-size: 14px;
    line-height: 16px;
    margin: 0 10px;
    font-family: "Roboto";
    font-weight: medium;
    a {
        text-decoration: none;
        color: #fff;
        &.active {
            color: #15FEA5;
        }
    }
`;