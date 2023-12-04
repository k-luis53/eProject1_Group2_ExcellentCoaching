import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiPhone } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";


function ContactUs() {
    return (
        <div>
            <Container fluid="md">

                <Row>
                    <Col>
                        <div className="googlemap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.325247630613!2d106.66372207465906!3d10.786382259010797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9fd7d!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1699950205576!5m2!1svi!2s"
                                width="100%" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="google" title="google"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <img src="/image/contact.jpg" alt="" style={{ width: "100%" }} />
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <h1>You Want To Talk?</h1>
                            <div>
                                <h4>
                                    <MdAlternateEmail />Let's talk: Email: <a href="mailto:info@excellentcoaching.com">info@excellentcoaching.com</a> <br /> </h4>
                                    <h5><CiPhone />: 0931313329 <br /></h5>
                                    <MdOutlineLocationOn />: 590 Đ. Cách Mạng Tháng 8, Phường 11, Quận 3, Thành phố Hồ Chí Minh 700000 <br />
                               
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default ContactUs;