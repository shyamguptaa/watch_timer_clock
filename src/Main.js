import React from 'react'
import { timerdata } from './constant'

function Main() {

  // function

  return (
    <>
      {/* <div className='display-5 mt-3 text-center'> ⏱️ Focus | 🧐 Concentrate <span  className='fs-6'>By Shyam</span></div> */}
      <div className='display-5 mt-3 text-center mb-3'> ⏱️ Focus | 🧐 Concentrate </div>
      <div className='text-center text-decoration-underline fs-3 mb-3'>
        Select the Timer
      </div>
      <div className='container mx-auto py-3'>
        <div className='row'>
          <div className="col-md-6 col-lg-3 col-sm-6 item ">
            <button type="button" className="btn  btn-lg btn-block" onClick={() => "open something"}>
              <div className="card item-card card-block m-2 p-3">
                {/* <h4 className="card-title text-right"><i className="material-icons">settings</i></h4> */}
                {/* <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt="Photo of sunset">  */}
                <h5 className="item-card-title mt-3 mb-3 display-6 text-wrap">Custom</h5>
                <p className="card-text fs-6 text-wrap">Enter  DD:HH:MM:SS of timer</p>
              </div>
            </button>
          </div>

          {timerdata && timerdata.map((item) =>
            <div key={item.id} className="col-md-6 col-lg-3 col-sm-6 item">
              <button key={item.id} type="button" className="btn  btn-lg btn-block" onClick={(item) => "console.log(item)"}>
                <div className="card item-card card-block m-2 p-3">
                  {/* <h6 className="lead text-right">{item?.Rating}</h6> */}
                  <h5 className="item-card-title mt-3 mb-3 display-6 text-wrap">{item.title.replaceAll("-", ":")} </h5>
                  <p className="card-text fs-6 text-wrap">{item.description}</p>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

    </>
  )
}

export default Main