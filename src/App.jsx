import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import NetflixNavbar from './MyComponents/NetflixNavbar';
import NetflixMain from './MyComponents/NetflixMain';
import NetflixFooter from './MyComponents/NetflixFooter';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FantasyCarousel from "./MyComponents/FantasyCarousel";
import SuperheroCarousel from "./MyComponents/SuperheroCarousel";
import MovieDetails from "./MyComponents/MovieDetails";

function App() {
  return (
    <>
          <BrowserRouter>
            <NetflixNavbar/>
              <Routes>
                <Route path="/" element={<NetflixMain/>}/>
                <Route path="/tv-shows" element={<SuperheroCarousel/>}/>
                <Route path="/movie-details/:movieID" element={<MovieDetails/>}/>
              </Routes>
            <NetflixFooter/>
          </BrowserRouter>
    </>
  );
}

export default App;
