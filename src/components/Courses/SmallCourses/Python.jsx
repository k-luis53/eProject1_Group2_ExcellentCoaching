import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Python() {
    return (
        <div className="std-program">
                    <Container>
      <Row>
        <Col sm={8}>
            <div className="title-courses"><h1>Python</h1></div>
            <div className="info-courses">
            Python is a programming language widely used in web applications, 
            software development, data science, and machine learning (ML). 
            Developers use Python because it is efficient, easy to learn, 
            and can run on many different platforms. Python software is free to download, 
            integrates well with all types of systems, and speeds up development.
            </div>
            <div className="detail-courses">
                <h6>What will you learn?</h6>
                <ul>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Server-side web development</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Automate using Python scripts</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Data science and machine learning</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Software Development</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Automate software testing</li>
                </ul>
            </div>
            <div className="title-courses">
                <h5>Course content:</h5>
                <a href="Python.docx">File Word</a>
            </div>            </Col>
        <Col sm={4}>
            <div className="modal-1">
            <img src="/image/python.jpg" alt="" style={{width:"100%"}}/>
            <div ><button className="button-28"><a href="/register" className='register-navbar'>Register</a></button></div>
            </div>        </Col>
      </Row>
    </Container>
        </div>
    );
}

export default Python;