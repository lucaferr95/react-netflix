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

function App() {


  return (
    <>
   <MyNavbar/>
   <Primopezzo/>
   <CaroST/>
   <CaroFG/>
   <MyFooter/>
    </>
  )
}

export default App
