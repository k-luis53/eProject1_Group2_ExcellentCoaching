import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Html() {
    return (
        <div className="std-program">
        <Container>
      <Row>
        <Col sm={8}>
            <div className="title-courses"><h1>HTML & CSS</h1></div>
            <div className="info-courses">
                HTML is the standard markup language for Web pages. With HTML you can create your own Website.
                HTML is easy to learn - You will enjoy it!
            </div>
            <div className="detail-courses">
                <h6>What will you learn?</h6>
                <ul>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to build web interfaces with HTML and CSS</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to name CSS classes according to BEM standards</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Master Flexbox when building website layouts</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Own 2 web interfaces when completing the course</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to analyze website interface</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to make responsive web interfaces</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to self-study new knowledge</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Receive course certificate issued by Code For Work</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Learn how to make UI meticulously and meticulously</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to motivate yourself</li>
                    
                </ul>
            </div>
            <div className="title-courses">
                <h5>Course content:</h5>
                <a href="HTML.docx">File Word</a>
            </div>
            </Col>
        <Col sm={4}>
            <div className="modal-1">
                <img src="/image/Screenshot 2023-11-24 094641.png" alt="" style={{width:"100%"}}/>
                <div >
                <button className="button-28"><a href="/register" className='register-navbar'>Register</a></button>
                </div>
            </div>
        </Col>
      </Row>
    </Container>
    </div>
    );
}

export default Html;