import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ReactJS() {
    return (
        <div className="std-program">
                    <Container>
      <Row>
        <Col sm={8}>
            <div className="title-courses"><h1>ReactJS</h1></div>
            <div className="info-courses">
            ReactJS course from basic to advanced, the result of this course is 
            that you can do most common projects with ReactJS. At the end of this course, 
            you will own a project similar to Tiktok.com, you can confidently apply for a job when 
            you firmly grasp the knowledge shared in this course.
            </div>
            <div className="detail-courses">
                <h6>What will you learn?</h6>
                <ul>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Understand the concept of SPA/MPA</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Understand how ReactJS works</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to optimize application performance</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to use redux-thunk middleware</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Deploy React project to the Internet</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to Deploy to Github/Gitlab page</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Understand the concept of hooks</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Understand function/class components</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Proficient in working with RESTful API</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Proficient in using Redux in projects</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Build real products (clone Tiktok)</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Enough to confidently apply for a job</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Receive course certificate issued by Code For Work</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Clearly understand the Redux workflow</li>
                </ul>
            </div>
            <div className="title-courses">
                <h5>Course content:</h5>
                <a href="ReactJS.docx">File Word</a>
            </div>            </Col>
        <Col sm={4}>
            <div className="modal-1">
            <img src="/image/Screenshot 2023-11-24 094752.png" alt="" style={{width:"100%"}}/>
                <div ><button className="button-28"><a href="/register" className='register-navbar'>Register</a></button></div>
            </div>        </Col>
      </Row>
    </Container>
        </div>
    );
}

export default ReactJS;