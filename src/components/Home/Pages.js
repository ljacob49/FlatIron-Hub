import React from "react";
import 'rsuite/dist/rsuite.min.css';
import { Link } from  "react-router-dom"
import '../../index.css'
import image1 from "../../images/image1.jpg"
import image2 from '../../images/image2.jpeg'
import image3 from '../../images/image3.jpeg'
import image4 from "../../images/image4.jpg"




function Pages() {

  return (
      <>
    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/login">
    <div className="card">
    <div className="card-image" style={{background: `url(${image1})`}}></div>
    <div className="card-text">
      <h2>Chat</h2>
      <p>Lets Chat</p>
    </div>
    <div className="card-stats">
    </div>
  </div>
  </Link>
  <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/games">
  <div className="card">
    <div className="card-image card2" style={{background: `url(${image2})`}}></div>
    <div className="card-text card2">
      <h2>Games</h2>
      <p>Lets Play Games</p>
    </div>
    <div className="card-stats card2">
    </div>
  </div>
  </Link>
  <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/learn">
  <div className="card">
      <div className="card-image card3" style={{background: `url(${image3})`}}></div>
      <div className="card-text card3">
        <h2>Learn</h2>
        <p>Lets Learn</p>
      </div>
      <div className="card-stats card3">
      </div>
    </div>
    </Link>
    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/videochat">
  <div className="card">
      <div className="card-image card4" style={{background: `url(${image4})`}}></div>
      <div className="card-text card4">
        <h2>Video Chat</h2>
        <p>Lets Hop On A Video Call</p>
      </div>
      <div className="card-stats card4">
      </div>
    </div>
    </Link>
    </>
  );
}

export default Pages;