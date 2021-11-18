import Video from '../../videos/Video.mp4'
import NavBar from './NavBar'
import Pages from './Pages'
const Home = () => {
    return (
        <>
        <div id="home-container">
                <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
                </video>
            <div id='nav-container'>
                <NavBar/>
            </div>
            <div id='title-container' style={{marginTop: '150px'}}>
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
