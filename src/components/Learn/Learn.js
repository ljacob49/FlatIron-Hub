import NavBar from "../Home/NavBar"
import LearnContainer from "./LearnContainer"
import Video from '../../videos/Video.mp4'

const Learn = () => {
    return (
        <>
        <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'> </video>
            <div id='nav-container'>
                <NavBar/>
            </div>
                <LearnContainer/>
        </>
    )
}

export default Learn
