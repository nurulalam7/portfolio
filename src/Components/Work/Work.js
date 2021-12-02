import React, { useState } from 'react'
import Card from './Card';
import './Work.css'

import fakedata from '../../fakeData/fakeData.json';

const Work = () => {
 const [projectdetails,setProjectdetails]=useState(fakedata);

 console.log(projectdetails);
  return (
   <div className="work">
      <div className="container my-5">
      <h2>projects overview</h2>
      <div className="row row-cols-lg-3 row-cols-mg-2 row-cols-1 g-4" >
        {
          projectdetails.map(projectdetail=> <Card
          key={projectdetail.id}
          projectdetail={projectdetail}
          ></Card>)
        }
        
      </div>

    </div>
   </div>
  )
}

export default Work
