import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faAward, faSquareCheck, 
         faCheck, faStopwatch, faBell, 
         faMoneyBills, faBook, faFileArrowDown, 
         faFile, faListCheck} from '@fortawesome/free-solid-svg-icons'

function BE() {
    return (
        <div className='ft'>
           <div className="top">
           <div className="left">
           <h1 className='h1'>Back End</h1>
            <p className='p'>A Back End developer is a person who can handle the server and database of a large dynamic website. They need to understand how server and database work know how to get infomation from user. But don't worry because we got you covered.</p>
            <h2>This course will include: </h2>
            <ul className='press'>
                <li><FontAwesomeIcon className="icon" icon={faSchool} />Study at the center with professional teachers</li>
                <li><FontAwesomeIcon className="icon" icon={faBook} />E-book too help you study better</li>
                <li><FontAwesomeIcon className="icon" icon={faFileArrowDown} />128 downloadable resources</li>
                <li><FontAwesomeIcon className="icon" icon={faFile} />24h daily post</li>
                <li><FontAwesomeIcon className="icon" icon={faListCheck} />Exercises in every lessons</li>
                <li><FontAwesomeIcon className="icon" icon={faSquareCheck} />Test after every lessons</li>
                <li><FontAwesomeIcon className="icon" icon={faAward} />Certificate when finishs</li>
            </ul>
            <h2>At the end of this course you will be able to:</h2>
            <ul className='press'>
                <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to build lofin logic for a website</li>
                <li><FontAwesomeIcon className="icon" icon={faCheck} />Understand how server and database work</li>
                <li><FontAwesomeIcon className="icon" icon={faCheck} />Build a fully functional backend structure for website</li>
                <li><FontAwesomeIcon className="icon" icon={faCheck} />Proficient with php server database and nodejs</li>
                <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to work and get open source code from github</li>
                <li><FontAwesomeIcon className="icon" icon={faCheck} />Create a clone of facebook tiktok and netflix</li>
            </ul>
            </div>
            <div className="right">
                <img src="image/backend-developer-dizibrand.png" alt="" />
                <div className='text'>
                 <FontAwesomeIcon className="icon" icon={faCheck} /> New course updated for 2023 <br />
                 <FontAwesomeIcon className="icon" icon={faStopwatch} />   Be a Full Stack developer in 6 month! <br />
                 <FontAwesomeIcon className="icon" icon={faAward} />   Have certificate when finish <br />
                 <FontAwesomeIcon className="icon" icon={faBell} /> Have notification when start <br />
                 <FontAwesomeIcon className="icon" icon={faMoneyBills} />   Starting off with 1200$
                </div>
                <div className="but"><button className='up-but'><a href="/register" className='register-navbar'>Register</a></button></div>
            </div>
           </div>
                <div className='course'>
                <h2>This course will be break into 3 small Course</h2>
                <div className='sc'><a href="/nodejs"><img src="image/Screenshot 2023-11-24 094801.png" alt="" className='img'/></a></div>
                    <div className='sc'><a href="/php"><img src="image/Screenshot 2023-11-24 094839.png" alt="" className='img'/></a></div>
                    <div className='sc'><a href="/python"><img src="image/python.jpg" alt="" className='img'/></a></div>
                </div>
        </div>
    );
}

export default BE;
