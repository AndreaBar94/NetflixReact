import { Component } from 'react';
import FantasyCarousel from './FantasyCarousel';
import ActionComedyCarousel from './ActionComedyCarousel';
import SuperheroCarousel from './SuperheroCarousel';
import Settings from './Settings';
import Profile from './Profile';

class NetflixMain extends Component {
    state = {}
    render(){
        return(
            <main className="container-fluid bg-dark">
                <FantasyCarousel/>
                <ActionComedyCarousel/>
                <SuperheroCarousel/>
                <Profile/>
                <Settings/>
            </main>
        )
    }
}

export default NetflixMain;