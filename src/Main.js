import React, { useState } from 'react'
import { timerdata } from './constant'
import Timer from './Timer'

function Main() {
  const [displayTimerPage, setDisplayTimerPage] = useState(0)
  const [onclickTimer, setOnClickTimer] = useState(null)

  const handleClick = (item) => {
    setDisplayTimerPage(1)
    setOnClickTimer(item)
  }
  const Initialdisplay = () => {
    return (
      <>
        {/* <div className='display-5 mt-3 text-center'> ⏱️ Focus | 🧐 Concentrate <span  className='fs-6'>By Shyam</span></div> */}
        <div className='display-5 mt-3 text-center mb-3'> ⏱️ Focus | 🧐 Concentrate <span className='fs-5'>Shyam</span></div>
        <div className='text-center text-decoration-underline fs-3 mb-3'>
          Select the Timer
        </div>
        <div className='container mx-auto py-3'>
          <div className='row'>
            <div className="col-md-6 col-lg-3 col-sm-6 item ">
              <button type="button" className="btn  btn-lg btn-block" data-toggle="modal" data-target="#exampleModal" onClick={() => "open something"}>
                <div className="card item-card card-block m-2 p-3">
                  {/* <h4 className="card-title text-right"><i className="material-icons">settings</i></h4> */}
                  {/* <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt="Photo of sunset">  */}
                  <h5 className="item-card-title mt-3 mb-3 display-6 text-wrap">Custom</h5>
                  <p className="card-text fs-6 text-wrap">Enter  DD:HH:MM:SS of timer</p>
                </div>
              </button>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Set Timer ⏱️ </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">

                    <div class="input-group">
                      {/* <div class="input-group-prepend">
                        <span class="input-group-text" id="">First and last name</span>
                      </div> */}
                      <input type="number" min="00" max="31" class="form-control" placeholder='DD' />
                      <input type="number" min="00" max="24" class="form-control" placeholder='HH' />
                      <input type="number" min="00" max="60" class="form-control" placeholder='MM' />
                      <input type="number" min="00" max="60" class="form-control" placeholder='SS' />
                      <div class="input-group-append">
                        <button class="btn btn-success" type="button" onClick={() => handleClick({
                          "DD":"01",
                          "HH":"01",
                          "MM":"01",
                          "SS":"60",
                      })}>Start</button>
                      </div>
                    </div>
                  </div>
                  {/* <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Start</button>
                  </div> */}
                </div>
              </div>
            </div>

            {timerdata && timerdata.map((item) =>
              <div key={item.id} className="col-md-6 col-lg-3 col-sm-6 item">
                <button key={item.id} type="button" className="btn  btn-lg btn-block" onClick={() => handleClick(item)}>
                  <div className="card item-card card-block m-2 p-3">
                    {item.Rating !== "" ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-2">{item.Rating}</span> : null}
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
  if (displayTimerPage === 1) {
    return <Timer data={onclickTimer} goback={setDisplayTimerPage} />
  }
  else {
    return Initialdisplay()
  }
}

export default Main