import React, { useRef, useState, useEffect } from "react"
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { ChatEngine, MessageFormSocial } from 'react-chat-engine'
import { useAuth } from "./AuthContext"
import { auth } from "./firebase"


export default function Chats() {
  const didMountRef = useRef(false)
  const [ loading, setLoading ] = useState(true)
  const { user } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    await auth.signOut()
    localStorage.removeItem('email')
    history.push('/login')
  }

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "test.jpg", { type: 'image/jpeg' });
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true
      if (!user || user === null) {
        history.push("/home")
        return
      }
      
      axios.get(
        'https://api.chatengine.io/users/me/',
        { headers: { 
          "project-id": '9815f58e-8c40-4d7e-84f7-351ac5dca83a',
          "user-name": user.email,
          "user-secret": user.uid
        }}
      )

      .then(() => setLoading(false))

      .catch(() => {
        let formdata = new FormData()
        formdata.append('email', user.email)
        formdata.append('username', user.email)
        formdata.append('secret', user.uid)

        getFile(user.photoURL)
        .then(avatar => {
          formdata.append('avatar', avatar, avatar.name)

          axios.post(
            'https://api.chatengine.io/users/',
            formdata,
            { headers: { "private-key": 'd0296654-8da6-46a8-a2fa-8101310567a9' }}
          )
          .then(() => setLoading(false))
        })
      })
    }
  }, [user, history])
  

  if (!user || loading) return <div />

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div>
      </div>

      <ChatEngine 
        height='calc(100vh - 50px)'
        projectID='9815f58e-8c40-4d7e-84f7-351ac5dca83a'
        userName={user.email}
        userSecret={user.uid}
        renderNewMessageForm={() => <MessageFormSocial />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  )
}
