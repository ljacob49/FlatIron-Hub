import Devs from "./Devs"
import NavBar from '../Home/NavBar'
import Video from '../../videos/Video.mp4'

const DevPage = () => {
    return (
        <div>
        <div id="home-container">
            <div id="home-bg">
                <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
                </video>
            </div>
            <div id='nav-container'>
                <NavBar/>
            </div>
        <div id='title-container'>
                <br /> <br /> <br /> <br /> 
                <h1 id='home-title' style={{paddingLeft: '75px'}}>Meet The Devs</h1>
        <div id='pages-container'>
                <Devs/>
            </div>
            </div>
        </div>
        </div>
    )
}

export default DevPage
