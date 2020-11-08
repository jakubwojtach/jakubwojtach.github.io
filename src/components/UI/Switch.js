import React, { useContext, useEffect, useState } from "react"
import Context from "../context"
import styled from "styled-components"
import {
  getDarkModeInfo,
  toggleDarkMode,
  setDarkModeInfo,
} from "../../helpers/utils"

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 15px;
  margin: auto 0;
`

const Slider = styled.span`
  position: absolute;
  top: 0;
  display: block;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.switchBg};
  border-radius: 34px;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: "";
    height: 13px;
    width: 12px;
    margin: 0.5px 0;
    background-color: #1f2335;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    transform: ${props => props.theme.knobTransform};
  }
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`

const Switch = () => {
  useEffect(() => {
    const data = getDarkModeInfo()
    setIsChecked(data === "true" ? "checked" : "")
    dispatch({
      type: "SET_MODE",
      payload: data,
    })
    setDarkModeInfo(data)
  }, [dispatch])

  const { dispatch } = useContext(Context)

  const handleOnClick = () => {
    // Dispatch action
    dispatch({ type: "TOGGLE_DARK_MODE" })
    setIsChecked(state => (state === "" ? "checked" : ""))
    toggleDarkMode()
  }

  const [isChecked, setIsChecked] = useState("")

  return (
    <Container>
      <Input type="checkbox" checked={isChecked} onChange={handleOnClick} />
      <Slider />
    </Container>
  )
}

export default Switch
