import Devs from "./Devs"
import NavBar from '../Home/NavBar'
import Video from '../../videos/Video.mp4'

const DevPage = () => {
    return (
        <div>
                <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
                </video>
                <NavBar/>
        <div id='title-container'>
                <br /> <br /> <br /> <br /> 
                <h1 id='home-title' style={{paddingLeft: '540px'}}>Meet The Devs</h1>
        <div id='pages-container' style={{paddingLeft: '280px'}} >
                <Devs/>
            </div>
            </div>
        </div>
    )
}

export default DevPage
