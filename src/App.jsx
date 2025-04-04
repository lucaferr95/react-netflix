import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MyNavbar from "./assets/components/Navbar";
import MyFooter from "./assets/components/Footer";
import Primopezzo from "./assets/components/Primopezzo";

function App() {


  return (
    <>
   <MyNavbar/>
   <Primopezzo/>
   <MyFooter/>
    </>
  )
}

export default App
