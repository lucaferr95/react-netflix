import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MyNavbar from "./assets/components/Navbar";
import MyFooter from "./assets/components/Footer";
import Primopezzo from "./assets/components/Primopezzo";

import CaroST from "./assets/components/CarouselST";
import CaroFG from "./assets/components/CarouselFG";

import CaroDN from "./assets/components/CarouselDN";
import ProfileComponent from "./assets/components/Profile";

import CarouselMeme from "./assets/components/CarouselMeme";


function App() {


  return (
    <>
   <MyNavbar/>
   <Primopezzo/>
   <CaroST/>
   <CaroFG/>
   <CaroDN/>
   <CarouselMeme/>
   <ProfileComponent/>
   <MyFooter/>
    </>
  )
}

export default App
