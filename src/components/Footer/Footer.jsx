import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import ModalMap from './Modal';

function Footer() {
    return ( 
        <div>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'></section>
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  Code For Work
                </h6>
                <section id="contact">
        <p>Address: 590 CMT8</p>

        <p>Email: <a href="mailto:info@excellentcoaching.com">info@excellentcoaching.com</a></p>
    </section>


              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='reactjs' className='text-reset'>
                    ReactJS
                  </a>
                </p>
                <p>
                  <a href='html' className='text-reset'>
                    HTML
                  </a>
                </p>
                <p>
                  <a href='sass' className='text-reset'>
                    Sass
                  </a>
                </p>
                <p>
                  <a href='javascript' className='text-reset'>
                    JavaScript
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Trainers' info</h6>
                <p>
                    <a href="https://www.facebook.com/ametrine.s" className='text-reset'><FontAwesomeIcon icon={faFacebook} />  Mrs. Ametrine</a>
                </p>
                <p>
                    <a href="https://www.facebook.com/profile.php?id=100015941252427" className='text-reset'><FontAwesomeIcon icon={faFacebook} />  Mr. Louis</a>
                </p>
                <p>
                    <a href="https://www.facebook.com/profile.php?id=100035684316443" className='text-reset'><FontAwesomeIcon icon={faFacebook} />  Mr. David</a>
                </p>
                <p>
                    <a href="https://www.facebook.com/profile.php?id=100038729464754" className='text-reset'><FontAwesomeIcon icon={faFacebook} />  Mr. Ben</a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Address:</h6>
              <ModalMap/>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        &copy; 2023 Excellent Coaching. All rights reserved.

        </div>
      </MDBFooter>
        </div>
     );
}

export default Footer;