import { Component } from "react"
import avatar from '../assets/avatar.png';

class Profile extends Component{
    render(){
        return(
            <main>
                <div className="container profileSettings text-light text-opacity-50">
                    <div className="container">
                    <h3 className="borderLine text-light fs-1">Edit Profile</h3>
                    </div>
                    <div className="container">
                    <div className="row borderLine">
                        <div className="col-4">
                        <div className="container">
                            <img src={avatar} alt="avatar logo" className="img-fluid" />
                        </div>
                        </div>
                        <div className="col-8">
                        <div className="container borderLine py-3 ps-0">
                            <div className="container"><p className="bg-secondary text-light p-2">Strive Student</p></div>
                            <div className="container"><p className="mb-1">Language:</p></div>
                            <div className="container">
                            <div className="dropdown">
                                <button className="btn btn-outline-light rounded-0 dropdown-toggle mt-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Language
                                </button>
                                <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">English</a></li>
                                <li><a className="dropdown-item" href="#">Italian</a></li>
                                <li><a className="dropdown-item" href="#">French</a></li>
                                <li><a className="dropdown-item" href="#">Spanish</a></li>
                                <li><a className="dropdown-item" href="#">German</a></li>
                                </ul>
                            </div></div>
                        </div>
                        <div className="container borderLine py-3 ps-0">
                            <div className="container py-1 d-flex align-items-center"><p className>Maturity Settings:</p></div>
                            <div className="container py-1 d-flex align-items-center"><p className="text-light bg-secondary bg-opacity-50 px-2">ALL MATURITY RATINGS</p></div>
                            <div className="container py-1 d-flex align-items-center"><p className="text-light text-opacity-75">Show titles of <span className="fw-bold">all maturity ratings </span>for this profile.</p></div>
                            <div className="container"><button type="button" className="editBtn btn btn-outline-secondary rounded-0">EDIT</button></div>
                        </div>
                        <div className="container py-3 ps-0">
                            <div className="container"><p>Autoplay controls</p></div>
                            <div className="container">
                            <input className="form-check-input border-secondary mt-0 bg-dark border border-1 rounded-0 p-3" type="checkbox" defaultValue aria-label="Checkbox for following text input" id="check1" />
                            <label className="mt-1" htmlFor="check1">Autoplay next episode in a series on all devices.</label>
                            </div>
                            <div className="container">
                            <input type="checkbox" className="form-check-input border-secondary mt-0 bg-dark border border-1 rounded-0 p-3" defaultValue aria-label="Checkbox for following text input" id="check2" />
                            <label className="mt-1" htmlFor="check2">Autoplay previews while browsing on all devices.</label>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="container py-3 d-flex justify-content-evenly">
                        <button type="button" className="btnOptProfile btn btn-outline-secondary rounded-0 px-5">SAVE</button>
                        <button type="button" className="btnOptProfile btn btn-outline-secondary rounded-0 px-5">CANCEL</button>
                        <button type="button" className="btnOptProfile btn btn-outline-secondary rounded-0 px-5">DELETE PROFILE</button>
                    </div>
                    </div>
                    <div className="container" />
                </div>
                </main>
        )
    }
}

export default Profile;