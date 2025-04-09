import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyHome from "./assets/components/Home";
import Primopezzo from "./assets/components/Primopezzo";
import CaroST from "./assets/components/CarouselST";
import CaroFG from "./assets/components/CarouselFG";
import CaroDN from "./assets/components/CarouselDN";
import CarouselMeme from "./assets/components/CarouselMeme";
import ProfileComponent from "./assets/components/Profile";
import NotFound from "./assets/components/NotFound";
import MyNavbar from "./assets/components/Navbar";
import MyFooter from "./assets/components/Footer";
  function App() {
    return (
      <BrowserRouter>
        <main className="d-flex flex-column min-vh-100">
          <MyNavbar />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<MyHome />} />
              <Route
                path="/tvshows"
                element={
                  <>
                    <Primopezzo />
                    <CaroST/>
                   <CaroDN/>
                  
                  </>
                }
              />
            <Route
  path="/griffin"
  element={
    <main className="d-flex flex-column min-vh-100 bg-black ">
      <div className="flex-grow-1 mt-5">
        <CaroFG />
      </div>
    </main>
  }
/>
            <Route
  path="/mylist"
  element={
    <main className="d-flex flex-column min-vh-100 bg-black ">
      <div className="flex-grow-1 mt-5">
        <CarouselMeme />
      </div>
    </main>
  }
/>
            <Route
  path="/profilo"
  element={
    <main className="d-flex flex-column min-vh-100 bg-black ">
      <div className="flex-grow-1 mt-5">
        <ProfileComponent />
      </div>
    </main>
  }
/>
                  
               
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <MyFooter />
        </main>
      </BrowserRouter>
    );
  }
  
  export default App;