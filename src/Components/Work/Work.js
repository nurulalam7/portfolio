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
  <div className="col hov">
    <div class="card">
      <img src={img1} class="card-img-top" alt="..."/>
     <div className="tech">
       <h4>project name:BD express</h4>
       <h6>technology--javascript</h6>
       <h6>framework--bootstrap,react</h6>
       <h6>about project</h6>
       <p>
         1.delivery related website
         2.any kind of delivery related issue solve
         3.user friendly 

       </p>
     </div>
      <div class="card-body congugle">
        <h5 class="card-title"><a href="https://delivery-website-assignment.web.app/"><button className="btn btn-danger">
         live site
          
         </button></a></h5>
         <h5><a href="https://github.com/nurulalam7/bd-express"><button className="btn btn-warning">code</button></a></h5>
          





      </div>
    </div>
  </div>
  <div className=" hov col">
    <div class="card">
      <img src={img2} class="card-img-top" alt="..."/>
      <div className="tech">
        <h4>project name:valient hospital</h4>
       <h6>technology--javascript</h6>
       <h6>framework--bootstrap,react</h6>
       <h6>about project</h6>
       <p>
         1.hospital related website
         2.any kind of dr.info issue solve
         3.user friendly 

       </p>
     </div>
      <div class="card-body congugle">
        <h5 class="card-title"><a href="https://health-related-website-ab8af.web.app/"><button className="btn btn-danger">live site</button></a></h5>
        <h5><a href="https://github.com/nurulalam7/valient-hospital"><button className="btn btn-warning">code</button></a></h5>
          


      </div>
    </div>
  </div>
  <div className=" hov col">
    <div class="card">
      <img src={img3} class="card-img-top" alt="..."/>
      <div className="tech">
        <h4></h4>
       <h6>technology--javascript</h6>
       <h6>framework--bootstrap,react</h6>
       <h6>about project</h6>
       <p>
         1.e commerce related website
         2.any kind of ecommerce related issue solve
         3.user friendly 

       </p>
     </div>
      <div class="card-body congugle">
        <h5 class="card-title"><a href="https://jovial-austin-91842f.netlify.app/"><button className="btn btn-danger">live site</button></a></h5>
        <h5><a href="https://github.com/Programming-Hero-Web-Course4/ranga-store-fix-nurulalam7"><button className="btn btn-warning">code</button></a></h5>
          
      </div>
    </div>
  </div>
  <div className="hov col">
    <div class="card">
      <img src={img4} class="card-img-top" alt="..."/>
      <div className="tech">
       <h6>technology--javascript</h6>
       <h6>framework--bootstrap,react</h6>
       <h6>about project</h6>
       <p>
         1.bike website
         2.any kind of ecommerce related issue solve
         3.user friendly 

       </p>
     </div>
      <div class="card-body congugle">
        <h5 class="card-title"><a href="https://jovial-austin-91842f.netlify.app/"><button className="btn btn-danger">live site</button></a></h5>
        <h5><a href="https://github.com/nurulalam7/suzuki-bike-ceneter-clinet-code-"><button className="btn btn-warning">code</button></a></h5>
          
      </div>
    </div>
  </div>
  <div className="hov col">
    <div class="card">
      <img src={img5} class="card-img-top" alt="..."/>
      <div className="tech">
       <h6>technology--javascript</h6>
       <h6>framework--bootstrap,react</h6>
       <h6>about project</h6>
       <p>
         1.motorbike related website
         2.any kind of motor bike issue solve
         3.user friendly 

       </p>
     </div>
      <div class="card-body congugle">
        <h5 class="card-title"><a href="https://assignment12-ab653.web.app/"><button className="btn btn-danger">live site</button></a></h5>
        <h5><a href="https://github.com/programming-hero-web-course-4/niche-website-client-side-nurulalam7"><button className="btn btn-warning">code</button></a></h5>
          
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Work
