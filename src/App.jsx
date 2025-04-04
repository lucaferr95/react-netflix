import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MyNavbar from "./assets/components/Navbar";
import MyFooter from "./assets/components/Footer";
import Primopezzo from "./assets/components/Primopezzo";
import CaroSection from "./assets/components/Carousel";

function App() {


  return (
    <>
   <MyNavbar/>
   <Primopezzo/>
   <CaroSection/>
   <MyFooter/>
    </>
  )
}

export default App
