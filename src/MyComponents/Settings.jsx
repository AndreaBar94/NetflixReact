import { Component } from "react"
import { Col, Container, Row } from "react-bootstrap";

class Settings extends Component {
    render(){
        return(
                    <main className="bg-light">
                <Container className=" py-5">
                <Container className=" border-bottom">
                    <h3>Account</h3>
                </Container>
                <Row className=" border-bottom py-3">
                    <Col lg={3} >
                    <Container >MEMBERSHIP &amp; BILLING</Container>
                    <Container ><button type="button" className="membership btn btn-outline-dark rounded-0">Cancel Membership</button></Container>
                    </Col>
                    <Col lg={9} >
                    <div className="border-bottom info">
                        <div className="d-flex justify-content-between">
                        <div><span>email</span></div>
                        <div><button type="button" className="btn border border-0 btn-outline-primary">Change account email</button></div>
                        </div>
                        <div className="d-flex justify-content-between">
                        <div><span>password:**********</span></div>
                        <div><button type="button" className="btn border border-0 btn-outline-primary">Change password</button></div>
                        </div>
                        <div className="d-flex justify-content-between">
                        <div><span>Phone: 123 45678 90</span></div>
                        <div><button type="button" className="btn border border-0 btn-outline-primary">Change phone number</button></div>
                        </div>
                    </div>
                    <div className="border-bottom paypal">
                        <div className="d-flex justify-content-between">
                        <div><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-paypal" viewBox="0 0 16 16">
                            <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z" />
                            </svg><span>paypal mail</span></div>
                        <div><button type="button" className="btn border border-0 btn-outline-primary">Update payment info</button></div>
                        </div>
                        <div className="d-flex justify-content-between">
                        <div><span /></div>
                        <div><button type="button" className="btn border border-0 btn-outline-primary">Billing Details</button></div>
                        </div>
                    </div>
                    <div className="promo">
                        <div className="d-flex justify-content-between">
                        <div><span /></div>
                        <div><button type="button" className="btn border border-0 btn-outline-primary">Redeem gift card or promo code</button></div>
                        </div>
                        <div className="d-flex justify-content-between">
                        <div><span /></div>
                        <div><button type="button" className="btn border border-0 btn-outline-primary">where to buy gift cards</button></div>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row className=" border-bottom py-3">
                    <Col lg={3}>
                    <Container ><span>PLAN DETAILS</span></Container>
                    </Col>
                    <Col lg={9}>
                    <div className="d-flex justify-content-between">
                        <div><span>Premium ultrahd</span></div>
                        <div><button type="button" className="btn border border-0 btn-outline-primary">Change plan</button></div>
                    </div>
                    </Col>
                </Row>
                <Row className=" border-bottom py-3">
                    <Col lg={3}>
                    <span className="container">SETTINGS</span>
                    </Col>
                    <Col lg={9}>
                    <div><button type="button" className="btn border border-0 btn-outline-primary">Parental controls</button></div>
                    <div><button type="button" className="btn border border-0 btn-outline-primary">Test participation</button></div>
                    <div><button type="button" className="btn border border-0 btn-outline-primary">Manage download devices</button></div>
                    <div><button type="button" className="btn border border-0 btn-outline-primary">Activate a device</button></div>
                    <div><button type="button" className="btn border border-0 btn-outline-primary">Recent devices streaming activity</button></div>
                    <div><button type="button" className="btn border border-0 btn-outline-primary">Sign out of all devices</button></div>
                    </Col>
                </Row>
                <Row className=" border-bottom py-3">
                    <Col lg={3}>
                    <Container >
                        <span>MY PROFILE</span>
                    </Container>
                    </Col>
                    <Col lg={9}>
                    <div className="d-flex justify-content-between">
                        <div><span>Strive Student</span></div>
                        <div><button type="button" className="btn border border-0 btn-outline-primary">manage profiles</button></div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div><span /></div>
                        <div><button type="button" className="btn border border-0 btn-outline-primary">Add profile email</button></div>
                    </div>
                    <div className="d-flex justify-content-between ">
                        <div><button type="button" className="btn border border-0 btn-outline-primary">language</button></div>
                        <div><button type="button" className="btn border border-0 btn-outline-primary">Viewing activity</button></div>
                    </div>
                    <div className="d-flex justify-content-between ">
                        <div><button type="button" className="btn border border-0 btn-outline-primary">Playback settings</button></div>
                        <div><button type="button" className="btn border border-0 btn-outline-primary">Ratings</button></div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div><button type="button" className="btn border border-0 btn-outline-primary">Subtitle appearance</button></div>
                        <div />
                    </div>
                    </Col>
                </Row>
                </Container>
            </main>
        )
    }
}

export default Settings;
