import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sass() {
    return (
        <div className="std-program">
                    <Container>
      <Row>
        <Col sm={8}>
            <div className="title-courses"><h1>SASS</h1></div>
            <div className="info-courses">
            The course still has additional exercises to help you easily master the Sass language.
            </div>
            <div className="detail-courses">
                <h6>What will you learn?</h6>
                <ul>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Learn and install Sass</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Use Sass in the project</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Nested rules and variables</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Extend and Placeholder selector</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />How to use mixins in Sass</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />@if, @media and mixins have @content</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Using Partial, @import in Sass</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />@use and @forward instead of @import</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Learn about the 7-1 pattern</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Learn about value types</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Use operators and interpolation</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Use if else and loops</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Build Grid system with Sass</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Build row-cols and offsets</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Build gutters with Sass</li>
                    <li><FontAwesomeIcon className="icon" icon={faCheck} />Complete grid system with Sass</li>
                </ul>
            </div>
            <div className="title-courses">
                <h5>Course content:</h5>
                <a href="SASS.docx">File Word</a>
            </div>            </Col>
        <Col sm={4}>
            <div className="modal-1">
            <img src="./image/sass.jpg" alt="" style={{width:"100%"}}/>
            <div ><button className="button-28"><a href="./register" className='register-navbar'>Register</a></button></div>
            </div>        </Col>
      </Row>
    </Container>
        </div>
    );
}

export default Sass;