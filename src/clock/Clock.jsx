import React, { useEffect,useState } from "react";
import ClockBackground from './ClockBackground'
import Time from "../text/Time";
import City from "../text/City";
import ClockPointer from "../pointer/ClockPointer";

export default function Clock(props) {
  const {timezone} = props

  const [light, setLight] = useState(true)
  const [year, setYear] = useState()
  const [mouth, setMouth] = useState()
  const [newDay, setNewDay] = useState()
  const [Hour, setHour] = useState()
  const [minute, setMinute] = useState()
  const [second, setSecond] = useState()

  const [hourDeg, setHourDeg] = useState()
  const [minuteDeg, setMinuteDeg] = useState()
  const [secondDeg, setSecondDeg] = useState()

  const deg = 6
  // const timezonePara = timezone *1000*60*60

  const setTime = () => {
    let nowTime = new Date();
    // console.log(nowTime.getTime());
    let day = new Date(nowTime.getTime() + timezone * 1000 * 60 * 60);
    let hour = day.getUTCHours() * deg * 5;
    // console.log(hour);
    let min = day.getUTCMinutes() * deg;
    // console.log(day.getUTCMinutes());
    let sec = day.getUTCSeconds() * deg;
    /**
     * 表盘实现时分秒
     * setSecondDeg(sec)
     * setMinuteDeg(min+sec/60)
     * setHourDeg(hour+min/12)

     */
    setSecondDeg(sec);
    setMinuteDeg(min + sec / 60);
    setHourDeg(hour + min / 12);

    // 数字显示年
    setYear(day.getUTCFullYear());
    // 数字显示月
    setMouth(day.getUTCMonth() + 1);
    // 数字显示日
    setNewDay(day.getUTCDate());
    // 数字显示小时
    setHour(day.getUTCHours());
    // 数字显示分钟
    setMinute(day.getUTCMinutes());
    // 数字显示秒
    setSecond(day.getUTCSeconds());
  }

  useEffect(() => {
    if( +Hour>=18 || +Hour<6){
      setLight(false)
    }
  }, [Hour]);

  useEffect(() => {
    setTime()
    const interval=setInterval(()=>{
      setTime()
    },100)
  
    return () => {
      clearInterval(interval)
    }
  }, [])
  
  return (
    <ClockBackground>
      {/* 城市名 */}
      <City is_white={light}>{props.city}</City>
      {/* 表盘 */}
      <ClockPointer 
      is_white={light}
      hourDeg={hourDeg}
      minuteDeg={minuteDeg}
      secondDeg={secondDeg}
      />
      {/* 显示时间 */}
      <Time is_white={light}>
        {year}-{mouth}-{newDay} {Hour}:{minute}:{second}
      </Time>
    </ClockBackground>
  );
}
