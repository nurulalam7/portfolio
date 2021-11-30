import React from 'react'
import './Work.css'
import img1 from '../image/Screenshot (50).png'
import img2 from '../image/Screenshot (51).png'
import img3 from '../image/Screenshot (52).png'
import img4 from '../image/Screenshot (53) - Copy.png'
import img5 from '../image/Screenshot (55) - Copy.png'
import { Card, Col, Row } from 'react-bootstrap'

const Work = () => {
  

    return (
        <div className="work" id="work">
            <h2>My Projects</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={img1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><a ><button className="btn btn-danger">
         live side
          




          </button></a></h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><a><button className="btn btn-danger">see more</button></a></h5>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><a><button className="btn btn-danger">see more</button></a></h5>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><a><button className="btn btn-danger">see more</button></a></h5>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img5} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><a><button className="btn btn-danger">see more</button></a></h5>
       
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Work
