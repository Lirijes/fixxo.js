import React from 'react'
import LeftImage from '../assets/images/img-2.svg'
import RightImage from '../assets/images/img-1.svg'


const Showcase = () => {
  return (
    <section className="__showcase">
        <div className="container-fluid">
            <img className="__1-fr left-img" src={LeftImage} alt="" style={{ "flex": "1" }} />
            <div className="main-menu">
                    <h1>Sale Up To 50% Off</h1>
                    <p>Online shopping free home delivery over $100</p>
                    <button type="button" className="btn btn-red">SHOP NOW</button>
                </div>
            <img className="__1-fr" src={RightImage} alt="" />
        </div>
    </section>
  )
}

export default Showcase