import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <div>
            <Container fluid="md">
                <Row>
                    <Col>
                        <div class="home-container">
                            <img src="./image/homeimg.jpg" alt="" className="home-img" />
                            <div class="text-info">
                                <h4>Excellent Coaching</h4>
                                <p>Excellent Coaching is into business for more than a decade. We have been
                                    advertising about their coaching classes through newspapers, pamphlets, television.
                                    Now with changing times, they have decided to go online as most of the students
                                    today are frequent users of Internet. They have planned for a website with complete
                                    details about the Coaching classes.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <h1><a href="./frontend" className="front-end">Front-End</a></h1>

            <Row>
                <Col>
                    <img src="./image/frontend.png" alt="" style={{ width: "80%" }} className="pic-1" />
                </Col>
                <Col>
                    <div className="text-1">
                        <p>A front-end developer builds the front-end portion
                            of websites and web applications—the part users
                            see and interact with. A front-end developer creates
                            websites and applications using web languages such as
                            HTML, CSS, and JavaScript that allow users to access
                            and interact with the site or app.</p>
                    </div>
                </Col>
            </Row>

            <Row><Col md={{ span: 4, offset: 9 }}><h1><a href="./backend" className="back-end">Back-End</a></h1></Col></Row>

            <Row>
                <Col md={{ span: 3, offset: 3 }}>
                    <div className="text-2">
                        <p>Back-end developers are the experts who build and maintain
                            the mechanisms that process data and perform actions on
                            websites. Unlike front-end developers, who control everything
                            you can see on a website, back-end developers are involved in
                            data storage, security, and other server-side functions that
                            you cannot see.</p>
                    </div>

                </Col>
                <Col md={{ span: 4, offset: 1 }}>
                    <img src="./image/backend.png" alt="" style={{ width: "80%" }} className="pic-2" />
                </Col>
            </Row>

            <h1><a href="./fullstack" className="full-stack">Full-Stack</a></h1>



            <Row>
                <Col>
                    <img src="./image/fullstack.jpg" alt="" style={{ width: "80%" }} className="pic-3" />
                </Col>
                <Col>
                    <div className="text-3">
                        <p>A full-stack developer is a developer or engineer who can build
                            both the front end and the back end of a website. The front end
                            (the parts of a website a user sees and interacts with) and
                            the back end (the behind-the-scenes data storage and processing)
                            require different skill sets.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Home;