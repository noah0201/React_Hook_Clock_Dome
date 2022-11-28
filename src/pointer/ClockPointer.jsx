import React from 'react'
import ClockPointerStyle from './ClockPointerStyle'
import HourPointer from "./HourPointer";
import MinutePointer from "./MinutePointer";
import SecondPointer from "./SecondPointer";
import ClockCenter from "./ClockCenter";
import BasicPointer from "./BasicPointer"

export default function ClockPointer(props) {
  const { 
    is_white,
      hourDeg,
      minuteDeg,
      secondDeg
    }=props
  return (
    <ClockPointerStyle is_white={is_white}>
      <HourPointer is_white={is_white} rotate={hourDeg} />
      <MinutePointer is_white={is_white} rotate={minuteDeg} />
      <SecondPointer is_white={is_white} rotate={secondDeg} />
      {/* <BasicPointer is_white={is_white} rotate={secondDeg} /> */}
      <ClockCenter />
    </ClockPointerStyle>
  );
}
