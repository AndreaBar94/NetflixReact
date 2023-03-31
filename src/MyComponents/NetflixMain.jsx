import { Component } from 'react';
import FantasyCarousel from './FantasyCarousel';
import ActionComedyCarousel from './ActionComedyCarousel';
import SuperheroCarousel from './SuperheroCarousel';

class NetflixMain extends Component {
    state = {}
    render(){
        return(
            <main className="container-fluid bg-dark">
                <FantasyCarousel/>
                <ActionComedyCarousel/>
                <SuperheroCarousel/>
            </main>
        )
    }
}

export default NetflixMain;