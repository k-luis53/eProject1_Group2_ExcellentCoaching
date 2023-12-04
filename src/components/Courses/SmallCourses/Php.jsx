import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Php() {
    return (
        <div className="std-program">
                    <Container>
      <Row>
        <Col sm={8}>
            <div className="title-courses"><h1>PHP</h1></div>
            <div className="info-courses">
            The modern PHP course with a project, challenges and theory. Includes SQL and MVC Framework. Get started with PHP 8!
            </div>
            <div className="detail-courses">
                <h6>What will you learn?</h6>
                <ul>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Become an advanced, confident, and modern PHP developer from scratch</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />PHP fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Get fast and friendly support in the Q&A area</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Build a beautiful real-world project for your portfolio (not boring toy apps)</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Become job-ready by understanding how PHP really works behind the scenes</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Modern OOP: Classes, constructors, polymorphism, encapsulation, inheritance and abstraction etc.</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />How to think and work like a developer: problem-solving, researching, workflows</li>   
                </ul>
            </div>
            <div className="title-courses">
                <h5>Course content:</h5>
                <a href="PHP.docx">File Word</a>
            </div>            </Col>
        <Col sm={4}>
            <div className="modal-1">
            <img src="/image/Screenshot 2023-11-24 094839.png" alt="" style={{width:"100%"}}/>
                <div ><button className="button-28"><a href="/register" className='register-navbar'>Register</a></button></div>
            </div>        </Col>
      </Row>
    </Container>
        </div>
    );
}

export default Php;