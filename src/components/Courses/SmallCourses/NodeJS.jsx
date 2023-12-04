
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NodeJS() {
    return (
        <div className="std-program">
                    <Container>
      <Row>
        <Col sm={8}>
            <div className="title-courses"><h1>Node & ExpressJS</h1></div>
            <div className="info-courses">
            Learn Back-end with Node & ExpressJS framework, understand concepts when making Back-end and building RESTful API for websites.
            </div>
            <div className="detail-courses">
                <h6>What will you learn?</h6>
                <ul>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Firmly grasp general theory in web building</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Build websites with Express with practical knowledge</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Master the theory of API and RESTful API</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Grasp the concept of the HTTP protocol</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Learn how to organize code in practice</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to work with Mongoose, MongoDB in NodeJS</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to build APIs according to RESTful API standards</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Understand the ideology and operation of the MVC model</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Know how to deploy a website to the internet</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Share real work experience</li>
                </ul>
            </div>
            <div className="title-courses">
                <h5>Course content:</h5>
                <a href="Node.docx">File Word</a>
            </div>            </Col>
        <Col sm={4}>
            <div className="modal-1">
            <img src="/image/Screenshot 2023-11-24 094801.png" alt="" style={{width:"100%"}}/>
                <div ><button className="button-28"><a href="/register" className='register-navbar'>Register</a></button></div>
            </div>        </Col>
      </Row>
    </Container>
        </div>
    );
}

export default NodeJS;