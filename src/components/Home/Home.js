import Video from '../../videos/Video.mp4'
import NavBar from './NavBar'
import Pages from './Pages'
const Home = () => {
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
            <div id='title-container'>
                <br /> <br /> <br /> <br /> 
                <h1 id='home-title' style={{paddingLeft: '155px'}}>WELCOME TO THE FLATIRON HUB</h1>
            <div id='pages-container'>
                <Pages/>
            </div>
            </div>
        </div>
        </>
    )
}

export default Home
