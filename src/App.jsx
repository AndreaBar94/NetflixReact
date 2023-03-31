import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import NetflixNavbar from './MyComponents/NetflixNavbar';
import NetflixMain from './MyComponents/NetflixMain';
import NetflixFooter from './MyComponents/NetflixFooter';

function App() {
  return (
    <>
      <NetflixNavbar/>
      <NetflixMain/>
      <NetflixFooter/>
    </>
  );
}

export default App;
