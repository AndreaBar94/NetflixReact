import { Component } from 'react';
import NetflixCarousel from './NetflixCarousel';

class NetflixMain extends Component {
    state = {}
    render(){
        return(
            <main className="container-fluid bg-dark">
                <NetflixCarousel/>
            </main>
        )
    }
}

export default NetflixMain;