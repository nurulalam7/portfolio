import React from 'react'
import aboutmy from '../image/ABOUTMY.jpg'
import './Aboutmy.css'


const Aboutmy = () => {
    return (
        <div className="aboutmy">
            <h2>ABOUT ME </h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>MD.NURUL <span>ALAM</span></h3>
                        <p>
                            i am front end developer. i have been working since january 2021.i have a passion in the field of web development. so that why i am doing this work.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={aboutmy}></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutmy
