import React from 'react'
import styled from 'styled-components';
import BasicPointer from "./BasicPointer";

const HourPointerStyle = styled(BasicPointer).attrs(props=>({
  rotate:props.rotate||0,
  size: 100,
  width: 8,
  bg_white: "#848484",
  bg_black: "#767676",
}))``

export default function HourPointer(props) {
  return (
    <HourPointerStyle is_white={props.is_white} rotate={props.rotate}/>
  )
}
