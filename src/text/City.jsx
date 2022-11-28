import React ,{useState,useEffect}from 'react'
import styled from 'styled-components'


const CityStyle = styled.div`
  margin-bottom: ${props=>props.margin_bottom};
  color: ${props=>props.color};
`

CityStyle.defaultProps={
  margin_bottom:"1.2rem",
  color:"black"
}

export default function City(props) {
  const [color, setColor] = useState('black');
  useEffect(()=>{
    setColor(props.is_white?"white":"black")
  },[props.is_white])
  return (
    <CityStyle color={color} margin_bottom={props.margin_bottom}>{props.children}</CityStyle>
  )
}
