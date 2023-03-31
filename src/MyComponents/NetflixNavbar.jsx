import Nav from 'react-bootstrap/Nav';
import netflix_logo from '../assets/netflix_logo.png';
import avatar from '../assets/avatar.png';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

function NetflixNavbar() {
  return (
    <Navbar className="bg-dark" expand="lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={netflix_logo} alt="netflix logo" width="85" height="38" className="d-inline-block align-text-top mx-3"/></a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Nav.Link className="nav-item">
                        Home
                        </Nav.Link>
                        <Nav.Link className="nav-item">
                        TV Shows
                        </Nav.Link>
                        <Nav.Link className="nav-item">
                            Movies
                        </Nav.Link>
                        <Nav.Link className="nav-item">
                        Recently Added
                        </Nav.Link>
                        <Nav.Link className="nav-item">
                        My List
                        </Nav.Link>
                    </Nav>
                        <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="white" className="bi bi-search mx-2" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                                <span className="text-light mx-2">KIDS</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="white" className="bi bi-bell-fill mx-2" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                                </svg>
                                <Dropdown className="btn-group dropdown">
                                    <Dropdown.Toggle type="button" className="btn btn-secondary dropdown-toggle bg-dark border-dark" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={avatar} width="30" height="30" alt="avatar logo"/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end bg-dark border-secondary">
                                    <Dropdown.Item className="dropBtn"><a className="dropdown-item text-light dropBtn" href="profile.html">Profile</a></Dropdown.Item>
                                    <Dropdown.Item className="dropBtn"><a className="dropdown-item text-light dropBtn" href="settings.html">Settings</a></Dropdown.Item>
                                    <Dropdown.Item className="dropBtn"><a className="dropdown-item text-light dropBtn" href="#">Log Out</a></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                        </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
    );
}

export default NetflixNavbar;