import React, { useEffect, useState } from 'react'
function Timer() {
  let day = 1
  let hrs = 1
  let min = 90
  let sec = 60
  // let mili = 1000
  // const duration = day * hrs * min * sec * mili;
  const duration = day * hrs * min * sec;
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
    let total_sec = parseInt(Math.floor(time));
    let total_min = parseInt(Math.floor(total_sec / 60))
    let total_hrs = parseInt(Math.floor(total_min / 60))
    let total_days = parseInt(Math.floor(total_hrs / 24))

    var seconds = parseInt(total_sec % 60)
    var minutes = parseInt(total_min % 60)
    var hours = parseInt(total_hrs % 24)
    seconds = seconds.toString().length === 1 ? `0${seconds}` : seconds;
    minutes = minutes.toString().length === 1 ? `0${minutes}` : minutes;
    hours = hours.toString().length === 1 ? `0${hours}` : hours;
    total_days = total_days.toString().length === 1 ? `0${total_days}` : hours;
    // return `${total_days}:${hours}:${minutes}:${seconds}`

    var t_day = () => {
      return total_days > 0 ? <>{total_days}<span className='fs-3 lead'>D</span>: </> : ""
    }
    var t_hrs = () => {
      if (total_days > 0) {
        return <>{hours}<span className='fs-3 lead'>H</span>: </>
      }
      else {
        return hours > 0 ? <>{hours}<span className='fs-3 lead'>H</span>: </> : ""
      }
    }
    var t_mins = () => {
      if (hours > 0 || total_days > 0) {
        return <>{minutes}<span className='fs-3 lead'>M</span>: </>
      }
      else {
        return minutes > 0 ? <>{minutes}<span className='fs-3 lead'>M</span>: </> : ""
      }
    }
    var t_sec = () => {
      return <>{seconds}<span className='fs-3 lead'>s</span></>
    }
    return (
      <>{t_day()}{t_hrs()}{t_mins()}{t_sec()}</>
      // <>{test()}  {total_days}<small className='fs-6 lead'>D</small>: {hours}<small className='fs-6 lead'>H</small>: {minutes}<small className='fs-6 lead'>M</small>: {seconds}<small className='fs-6 lead'>s</small></>
    )
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