import React from 'react'
import styled from 'styled-components';
import BasicPointer from "./BasicPointer";

const MinutePointerStyle = styled(BasicPointer).attrs((props) =>( {
  rotate: props.rotate || 30,
  size: 120,
  width: 4,
  bg_white:"#817d7d",
  bg_black:"#fff",
}))``;

export default function MinutePointer(props) {
  return (
  <MinutePointerStyle is_white={props.is_white} rotate={props.rotate}/>
)}
