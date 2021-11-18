import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import niraj from "../../images/niraj.jpeg"
import louis from "../../images/louis.jpg"
import michael from "../../images/michael.jpeg"
import niraj1 from "../../images/niraj1.jpg"
import louis1 from "../../images/louis1.jpg"
import michael1 from "../../images/michael1.jpg"


library.add(fab)


const Devs = () => {
    return (
        <>
        <div className="card-container">
            <section className="img-card-section">
                <div className="img-card-square"></div>
                <img alt="background" className="img-card-style" src={niraj1}></img>
            </section>
            <section className="name-card-section">
                Niraj Patel
            </section>
            <section className="title-card-section">
                Software Engineer
            </section>
            <section className="desc-card-section">
                I’m a full-time Software Engineering student at Flatiron.
                My hobbies include playing basketball, playing video games and learning new programming frameworks.
            </section>
            <section className="social-card-section">
                <a href="https://nirajpatel23.medium.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'medium']} className="social-card-style" />
                </a>
                <a href="https://www.linkedin.com/in/niraj-p-a5a063156/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className="social-card-style" />
                </a>
                <a href="https://github.com/niraj23" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github']} className="social-card-style" />
                </a>
            </section>
                <img alt="profile" className="profile-img-card" src={niraj}></img>
            </div>
        <div/>
        <div className="card-container">
            <section className="img-card-section">
                <div className="img-card-square"></div>
                <img alt="background" className="img-card-style" src={louis1}></img>
            </section>
            <section className="name-card-section">
                Louis Jacob
            </section>
            <section className="title-card-section">
                Software Engineer
            </section>
            <section className="desc-card-section">
                I'm a full-time student at the Flatiron School. I enjoy being outdoors with my dog and watching soccer.
                I'm passionate about developing my skills to become a better developer.
            </section>
            <section className="social-card-section">
                <a href="https://www.linkedin.com/in/louis-jacob-b30b04b2/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className="social-card-style" />
                </a>
                <a href="https://github.com/ljacob49" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github']} className="social-card-style" />
                </a>
            </section>
                <img alt="profile" className="profile-img-card" src={louis}></img>
            </div>
        <div/>
        <div className="card-container">
            <section className="img-card-section">
                <div className="img-card-square"></div>
                <img alt="background" className="img-card-style" src={michael1}></img>
            </section>
            <section className="name-card-section">
                Michael Toth
            </section>
            <section className="title-card-section">
                Software Engineer
            </section>
            <section className="desc-card-section">
                I’m a full-time, full-stack software engineering student at Flatiron School.
                I love playing golf, playing video games and investing far too much time into every DC sports team.
            </section>
            <section className="social-card-section">
                <a href="https://medium.com/@mtoth003" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'medium']} className="social-card-style" />
                </a>
                <a href="http://www.linkedin.com/in/michael-toth-a95b2362" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className="social-card-style" />
                </a>
                <a href="https://github.com/mtoth003" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github']} className="social-card-style" />
                </a>
            </section>
                <img alt="profile" className="profile-img-card" src={michael}></img>
            </div>
        <div/>
        </>
    )
}

export default Devs