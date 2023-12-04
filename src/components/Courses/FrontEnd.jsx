import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSchool, faAward, faSquareCheck,
    faCheck, faStopwatch, faBell,
    faMoneyBills, faBook, faFileArrowDown,
    faFile, faListCheck
} from '@fortawesome/free-solid-svg-icons'

function FE() {
    return (
        <div className='ft'>
            <div className="top">
                <div className="left">
                    <h1 className='h1'>FrontEnd</h1>
                    <p className='p'>A Front End developer is a person who can handle the presenting interface for the user. They need to have good designing skill, proficent undertanding of code such as html css and javascript . But dont't worry because we got you covered.</p>
                    <h2>This course will include: </h2>
                    <ul className='press'>
                        <li><FontAwesomeIcon className="icon" icon={faSchool} />Study at the center with professional teachers</li>
                        <li><FontAwesomeIcon className="icon" icon={faBook} />E-book too help you study better</li>
                        <li><FontAwesomeIcon className="icon" icon={faFileArrowDown} />108 downloadable resources</li>
                        <li><FontAwesomeIcon className="icon" icon={faFile} />24h daily post</li>
                        <li><FontAwesomeIcon className="icon" icon={faListCheck} />Exercises in every lessons</li>
                        <li><FontAwesomeIcon className="icon" icon={faSquareCheck} />Test after every lessons</li>
                        <li><FontAwesomeIcon className="icon" icon={faAward} />Certificate when finishs</li>
                    </ul>
                    <h2>At the end of this course you will be able to:</h2>
                    <ul className='press'>
                        <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to work and get open source code from github</li>
                        <li><FontAwesomeIcon className="icon" icon={faCheck} />Proficient with html css javascript and reactjs</li>
                        <li><FontAwesomeIcon className="icon" icon={faCheck} />Create a portfolio page and launch it</li>
                        <li><FontAwesomeIcon className="icon" icon={faCheck} />Build a stunning website interface</li   >
                        <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to maximize Ui Ux design for customer</li>
                        <li><FontAwesomeIcon className="icon" icon={faCheck} />Design a website page with figma</li>
                    </ul>
                </div>
                <div className="right">
                    <img src="image/frondend.jpg" alt="" />
                    <div className='text'>
                        <FontAwesomeIcon className="icon" icon={faCheck} /> New course updated for 2023 <br />
                        <FontAwesomeIcon className="icon" icon={faStopwatch} />   Be a Front End developer in 3 month! <br />
                        <FontAwesomeIcon className="icon" icon={faAward} />   Have certificate when finish <br />
                        <FontAwesomeIcon className="icon" icon={faBell} /> Have notification when start <br />
                        <FontAwesomeIcon className="icon" icon={faMoneyBills} />   Starting off with 800$
                    </div>
                    <div className="but"><button className='up-but'><a href="/register" className='register-navbar'>Register</a></button></div>
                </div>
            </div>
            <div className='course'>
                <h2>This course will be break into 4 small Course</h2>
                <div className='sc'><a href="/html"><img src="image/Screenshot 2023-11-24 094641.png" alt="" className='img'/></a></div>
                    <div className='sc'><a href="/reactjs"><img src="image/Screenshot 2023-11-24 094752.png" alt="" className='img'/></a></div>
                    <div className='sc'><a href="/sass"><img src="image/sass.jpg" alt="" className='img'/></a></div>
                    <div className='sc'><a href="/javascript"><img src="image/Screenshot 2023-11-24 094719.png" alt="" className='img'/></a></div>
            </div>
        </div>
    );
}

export default FE;
