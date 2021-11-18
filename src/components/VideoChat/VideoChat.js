import { useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';
import NavBar from '../Home/NavBar';
import Video from '../../videos/Video.mp4'
import { MarvelDevices } from "react-css-devices";
import { CopyToClipboard } from 'react-copy-to-clipboard';


function VideoChat() {
  const [peerId, setPeerId] = useState('');
  const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);

  useEffect(() => {
    const peer = new Peer();

    peer.on('open', (id) => {
      setPeerId(id)
    });
    
    peer.on('call', (call) => {
      var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
        call.answer(mediaStream)
        call.on('stream', function(remoteStream) {
          remoteVideoRef.current.srcObject = remoteStream
          remoteVideoRef.current.play();
        });
        call.on('close', () => {
            remoteVideoRef.current.remove()
        })
      });
    })

    peerInstance.current = peer;
  }, [])

  const call = (remotePeerId) => {
    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (mediaStream) => {

      currentUserVideoRef.current.srcObject = mediaStream;
      currentUserVideoRef.current.play();
      const call = peerInstance.current.call(remotePeerId, mediaStream)

      call.on('stream', (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream
        remoteVideoRef.current.play();
      });

      call.on('close', () => {
          remoteVideoRef.current.remove()
      })
    });
  }

  return (
<>
<div id="home-container">
   <div id="home-bg">
      <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
      </video>
   </div>
   <div id='nav-container'>
      <NavBar/>
   </div>
   <div id='video-container'>
      <MarvelDevices fluid='false' deviceName={"ipad"} color={"gray"} orientation={"landscape"} transform={0.5}>
         <video className='video-id-ipad' fluid={false} width={100} height={50} ref={remoteVideoRef} />
      </MarvelDevices>
   </div>
   <div id='video2-container'>
      <MarvelDevices fluid='false' deviceName={"ipad"} color={"gray"} orientation={"landscape"} transform={0.5} >
         <video className='video-id-ipad' ref={currentUserVideoRef} />
      </MarvelDevices>
   </div>
   <div id='video-title-container'>
      <CopyToClipboard text={peerId}>
         <button>Copy User ID</button>
      </CopyToClipboard>
   </div>
   <div id='video3-container'>
      <input type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} />
      <button onClick={() => call(remotePeerIdValue)}>Call</button>
      <button onClick={() => call(!remotePeerIdValue)}>Hang Up</button>
   </div>
</div>
</>
  )
}





export default VideoChat;

