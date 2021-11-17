import React from "react"
import { GoogleOutlined, TwitterOutlined } from '@ant-design/icons'
import firebase from "firebase/app"
import { auth } from "./firebase"
import NavBar  from "../Home/NavBar"
import Video from '../../videos/Video.mp4'


const LoginScreen = () => {
  return (
    <>
    <div id="login-container">
    <div id='login-page'>
          <video id="login-video" autoPlay loop muted src={Video} type='video/mp4'>
          </video>
    </div>
    <div id='nav-container'>
                <NavBar/>
            </div>
      <div id='log-container'>
      <div id='login-card'>
        <h2 style={{color: 'white'}}>Flatiron Chat! </h2>

        <div
          className='login-button google'
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        <br/><br/>

        <div
          className='login-button twitter'
          onClick={() => auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider()) }
        >
          <TwitterOutlined /> Sign In with Twitter
        </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default LoginScreen