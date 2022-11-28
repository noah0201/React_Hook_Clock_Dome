import React from 'react'
import styled from "styled-components";
import BasicPointer from "./BasicPointer";


const SecondPointerStyle = styled(BasicPointer).attrs((props) => ({
  rotate: props.rotate || 60,
  size: 160,
  width: 2,
  bg_white: "#ff6767",
  bg_black: "#ed67ff",
  tail: 15,
}))``;
export default function SecondPointer(props) {
  return (
    <SecondPointerStyle is_white={props.is_white} rotate={props.rotate}/>
  )
}
