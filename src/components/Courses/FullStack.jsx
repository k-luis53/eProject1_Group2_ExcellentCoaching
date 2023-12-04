import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSchool, faAward, faSquareCheck,
    faCheck, faStopwatch, faBell,
    faMoneyBills, faBook, faFileArrowDown,
    faFile, faListCheck
} from '@fortawesome/free-solid-svg-icons'

function FT() {
    return (
        <div className='ft'>
            <div className="top">
                <div className="left">
                    <h1 className='h1'>Full Stack</h1>
                    <p className='p'>A Full Stack developer is a person who can handle both the frontend and the back end of a website, there for they are paid with very high salary and have very wealthy life. Full Stack developer is one of the most high demand job in the word. But dont't worru because we got you covered.</p>
                    <h2>This course will include: </h2>
                    <ul className='press'>
                        <li><FontAwesomeIcon className="icon" icon={faSchool} />Study at the center with professional teachers</li>
                        <li><FontAwesomeIcon className="icon" icon={faBook} />E-book too help you study better</li>
                        <li><FontAwesomeIcon className="icon" icon={faFileArrowDown} />236 downloadable resources</li>
                        <li><FontAwesomeIcon className="icon" icon={faFile} />24h daily post</li>
                        <li> <FontAwesomeIcon className="icon" icon={faListCheck} />Exercises in every lessons </li>
                        <li><FontAwesomeIcon className="icon" icon={faSquareCheck} />Test after every lessons</li>
                        <li><FontAwesomeIcon className="icon" icon={faAward} />Certificate when finishs</li>
                    </ul>
                    <h2>At the end of this course you will be able to:</h2>
                    <ul className='press'>
                        <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to maximize Ui Ux design for customer</li>
                        <li><FontAwesomeIcon className="icon" icon={faCheck} />Understand how server and database work</li>
                        <li><FontAwesomeIcon className="icon" icon={faCheck} />Build a fully functional website with both frontend and backend</li>
                        <li><FontAwesomeIcon className="icon" icon={faCheck} />Proficient with html css javascript php and reactjs</li>
                        <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to work and get open source code from github</li>
                        <li><FontAwesomeIcon className="icon" icon={faCheck} />Create a portfolio page and launch it</li>
                    </ul>
                </div>
                <div className="right">
                    <img  src="image/Screenshot 2023-11-24 104325.png" alt="" />
                    <div className='text'>
                        <FontAwesomeIcon className="icon" icon={faCheck} /> New course updated for 2023 <br />
                        <FontAwesomeIcon className="icon" icon={faStopwatch} />   Be a Full Stack developer in 6 month! <br />
                        <FontAwesomeIcon className="icon" icon={faAward} />   Have certificate when finish <br />
                        <FontAwesomeIcon className="icon" icon={faBell} /> Have notification when start <br />
                        <FontAwesomeIcon className="icon" icon={faMoneyBills} />   Starting off with 2000$
                    </div>
                    <div className="but"><button className='up-but'><a href="/register" className='register-navbar'>Register</a></button></div>
                </div>
            </div>
            <div className='course'>
                <h2>This course will be break into 7 small Course</h2>
                <div className='sc'><a href="/html"><img src="image/Screenshot 2023-11-24 094641.png" alt="" className='img' /></a></div>
                <div className='sc'><a href="/javascript"><img src="image/Screenshot 2023-11-24 094719.png" alt="" className='img' /></a></div>
                <div className='sc'><a href="/reactjs"><img src="image/Screenshot 2023-11-24 094752.png" alt="" className='img' /></a></div>
                <div className='sc'><a href="/nodejs"><img src="image/Screenshot 2023-11-24 094801.png" alt="" className='img' /></a></div>
                <div className='sc'><a href="/php"><img src="image/Screenshot 2023-11-24 094839.png" alt="" className='img' /></a></div>
                <div className='sc'><a href="/python"><img src="image/python.jpg" alt="" className='img'/></a></div>
                <div className='sc'><a href="/sass"><img src="image/sass.jpg" alt="" className='img'/></a></div>
            </div>
        </div>
    );
}

export default FT;
