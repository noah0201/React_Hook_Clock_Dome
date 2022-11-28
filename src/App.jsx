import React from 'react'
import styled from 'styled-components'
import Clock from './clock/Clock'

const ClockGroup = styled.div`
  display: flex;
  justify-content: center;
  /* 全 */
  align-content: center;
  align-items: center;
  /* 是否流动 nowrap不流动*/
  flex-wrap: wrap;
  /* 绝对宽度 */
  max-width: 1200px;
`

export default function App() {
  return (
    <ClockGroup>
      <Clock city={"BeiJing"} timezone={8}/>
      <Clock city={"London"} timezone={0}/>
      <Clock city={"New York"} timezone={-5}/>
      <Clock city={"Sydney"} timezone={11}/>
    </ClockGroup>
  );
}
