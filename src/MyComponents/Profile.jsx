import { Component } from "react"
import { Container, Dropdown } from "react-bootstrap";
import avatar from '../assets/avatar.png';

class Profile extends Component{
    render(){
        return(
            <main>
                <Container className="container profileSettings text-light text-opacity-50">
                    <Container className="container">
                    <h3 className="borderLine text-light fs-1">Edit Profile</h3>
                    </Container>
                    <Container className="container">
                    <div className="row borderLine">
                        <div className="col-4">
                        <Container className="container">
                            <img src={avatar} alt="avatar logo" className="img-fluid" />
                        </Container>
                        </div>
                        <div className="col-8">
                        <Container className="container borderLine py-3 ps-0">
                            <Container className="container"><p className="bg-secondary text-light p-2">Strive Student</p></Container>
                            <Container className="container"><p className="mb-1">Language:</p></Container>
                            <Container className="container">
                            <Dropdown className="dropdown">
                                <Dropdown.Toggle className="btn btn-outline-light rounded-0 dropdown-toggle mt-0 bg-secondary text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Language
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu bg-secondary">
                                <Dropdown.Item><a className="text-light text-decoration-none" href="#">English</a></Dropdown.Item>
                                <Dropdown.Item><a className="text-light text-decoration-none" href="#">Italian</a></Dropdown.Item>
                                <Dropdown.Item><a className="text-light text-decoration-none" href="#">French</a></Dropdown.Item>
                                <Dropdown.Item><a className="text-light text-decoration-none" href="#">Spanish</a></Dropdown.Item>
                                <Dropdown.Item><a className="text-light text-decoration-none" href="#">German</a></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </Container>
                        </Container>
                        <Container className="container borderLine py-3 ps-0">
                            <Container className="container py-1 d-flex align-items-center"><p className>Maturity Settings:</p></Container>
                            <Container className="container py-1 d-flex align-items-center"><p className="text-light bg-secondary bg-opacity-50 px-2">ALL MATURITY RATINGS</p></Container>
                            <Container className="container py-1 d-flex align-items-center"><p className="text-light text-opacity-75">Show titles of <span className="fw-bold">all maturity ratings </span>for this profile.</p></Container>
                            <div className="container"><button type="button" className="editBtn btn btn-outline-secondary rounded-0">EDIT</button></div>
                        </Container>
                        <div className="container py-3 ps-0">
                            <Container className="container"><p>Autoplay controls</p></Container>
                            <Container className="container">
                            <input className="form-check-input border-secondary mt-0 bg-dark border border-1 rounded-0 p-3" type="checkbox" defaultValue aria-label="Checkbox for following text input" id="check1" />
                            <label className="mt-1" htmlFor="check1">Autoplay next episode in a series on all devices.</label>
                            </Container>
                            <Container className="container">
                            <input type="checkbox" className="form-check-input border-secondary mt-0 bg-dark border border-1 rounded-0 p-3" defaultValue aria-label="Checkbox for following text input" id="check2" />
                            <label className="mt-1" htmlFor="check2">Autoplay previews while browsing on all devices.</label>
                            </Container>
                        </div>
                        </div>
                    </div>
                    <Container className="container py-3 d-flex justify-content-evenly">
                        <button type="button" className="btnOptProfile btn btn-outline-secondary rounded-0 px-5">SAVE</button>
                        <button type="button" className="btnOptProfile btn btn-outline-secondary rounded-0 px-5">CANCEL</button>
                        <button type="button" className="btnOptProfile btn btn-outline-secondary rounded-0 px-5">DELETE PROFILE</button>
                    </Container>

                    </Container>
                    <Container/>
                </Container>
                </main>
        )
    }
}

export default Profile;