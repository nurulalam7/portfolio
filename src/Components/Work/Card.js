import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {img1,id}=props.projectdetail;
  console.log(props.data)
    return (
        <div  >
            <img className="img-fluid" src={img1} alt="" />
           <Link to={`/seemore/${id}`}>
               <button className="mt-3 btn btn-danger">see more</button>
           </Link>
        </div>
    )
}

export default Card
