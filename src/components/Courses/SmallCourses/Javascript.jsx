import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Javascript() {
    return (
        <div className="std-program">
                    <Container>
      <Row>
        <Col sm={8}>
            <div className="title-courses"><h1>Javascript</h1></div>
            <div className="info-courses">
            Learning basic Javascript is suitable for people who have never learned programming.
            With more than 100 lessons and practice exercises after each lesson.
            </div>
            <div className="detail-courses">
                <h6>What will you learn?</h6>
                <ul>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Understand the basic concepts in JS in detail</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Be confident when interviewing with solid knowledge</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Master the features in ES6 version</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Memorize concepts with multiple-choice exercises</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Practice exercises such as Tabs, Music Player</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Have a foundation to learn JS libraries and frameworks</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Proficient in DOM APIs to interact with websites</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Enhance thinking with tests with testcases</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Receive course certificate issued by Code For Work</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Built the first website combined with JS</li>
                </ul>
            </div>
            <div className="title-courses">
                <h5>Course content:</h5>
                <a href="JavaScript.docx">File Word</a>
            </div>
            </Col>
        <Col sm={4}>
            <div className="modal-1">
            <img src="./image/Screenshot 2023-11-24 094719.png" alt="" style={{width:"100%"}}/>
                <div ><button className="button-28"><a href="./register" className='register-navbar'>Register</a></button></div>
            </div>
            </Col>
      </Row>
    </Container>
        </div>
    );
}

export default Javascript;