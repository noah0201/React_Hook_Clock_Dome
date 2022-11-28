import React,{useState,useEffect} from 'react'
import styled from "styled-components";

const TimeStyle=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  color: ${props=>props.color};
`

TimeStyle.defaultProps={
  color:'black'
}

export default function Time(props) {
  const [color,setColor]=useState('black')

  useEffect(()=>{
    setColor(props.is_white?'white':"black")
  },[props.is_white])

  return (
    <TimeStyle color={color}>{props.children}</TimeStyle>
  )
}
