import { useState } from 'react'
import image1 from '../assets/home_image1.jpg';
import image2 from '../assets/home_image2.jpg';
import image3 from '../assets/home_image3.jpg';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {

  return (
    <>
        <div className="home">
            <header>
                <h1>Florida Man News</h1>
                <Link to="/articles" className="btn">Browse Article Archive</Link>
            </header>
            <div className="images">
                <img src={image3}/>
                <img src={image2}/>
            </div>
        </div>
    </>
  )
}

export default Home