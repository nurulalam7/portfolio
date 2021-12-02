import React from 'react'
import { useParams } from 'react-router'
import fakedata2 from '../../fakeData/fakeData.json'
const SeeMore = () => {
    const {id}=useParams();
    const details=fakedata2.find(project=>project.id==id);
    const {img2,img3,img4,project,technology,framework,about,link,link2}=details;
    return (
        <div className="container my-5">
            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 g-4 ">
                <div className=" row row-cols-md-2 row-cols-1 g-3">
                    <div className="">
                    <img className="img-fluid" src={img2} alt="" />

                    </div>
                    <div className="">
                    <img className="img-fluid" src={img3} alt="" />

                    </div>
                    <div className="">
                    <img className="img-fluid" src={img4} alt="" />

                    </div>
                </div>
                <div className="projectinfo">
                    
                    <h3>{project}</h3>

                  <li>
                     
                     {about}
                  </li>
                  <li>
                      {framework}
                  </li>
                  <li>
                      {technology}
                  </li>

                  <a href={link}><button className="btn btn-warning my-4">live </button></a>
                  <a href={link2}><button className="btn btn-danger mx-4 my-4">code </button></a>
                </div>
              
               
                
            </div>
           
        </div>
    )
}

export default SeeMore
