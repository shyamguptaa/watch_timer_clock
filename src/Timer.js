import React, { useEffect, useState } from 'react'
function Timer() {
  let day = 1
  let hrs = 1
  let min = 1
  let sec = 5
  // let mili = 1000
  // const duration = day * hrs * min * sec * mili;
  const duration = day* hrs * min * sec ;
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      if (time > 0)
        // setTime(time - 1000)
        setTime(time - 1)
    }, 1000);
  }, [time])

  const getFormatedTime = (time) => {
    // let total_sec = parseInt(Math.floor(time / mili));
    let total_sec = parseInt(Math.floor(time ));
    let total_min = parseInt(Math.floor(total_sec / 60))
    let total_hrs = parseInt(Math.floor(total_min / 60))
    let total_days = parseInt(Math.floor(total_hrs / 24))

    let seconds = parseInt(total_sec % 60)
    let minutes = parseInt(total_min % 60)
    let hours = parseInt(total_hrs % 24)
    seconds=seconds.toString().length===1? `0${seconds}`:seconds;
    minutes=minutes.toString().length===1? `0${minutes}`:minutes;
    hours=hours.toString().length===1? `0${hours}`:hours;
    total_days=total_days.toString().length===1? `0${total_days}`:hours;
    return `${total_days}:${hours}:${minutes}:${seconds}`
  }
  return (
    <>
      <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
        <p className='display-1'>{getFormatedTime(time)}</p>
      </div>
    </>
  )
}

export default Timer