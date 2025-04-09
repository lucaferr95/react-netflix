import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = () => {
    const location = useLocation()
    console.log('LOCATION', location)
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="border-bottom border-body" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="/Netflix images/netflix_logo.png"
            alt="netflix_logo"
            width="120"
            height="60"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Link className={ location.pathname === '/' ? 'nav-link active' : 'nav-link'}to="/">Home</Link>
            <Link className= {location.pathname === '/tvshows' ? 'nav-link active' : 'nav-link'}to="tvshows">Tv Shows</Link>
            <Link className={location.pathname === '/griffin' ? 'nav-link active' : 'nav-link'}to="griffin">Recently Added</Link>
            <Link className={location.pathname === '/mylist' ? 'nav-link active' : 'nav-link'}to="mylist"> My list</Link>
           
          </Nav>

          <div className="d-flex align-items-center gap-3 mx-2">
            <Button variant="outline-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
  <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
  <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
</svg>
            </Button>

            <a href="#" className="text-light-emphasis opacity-50 text-decoration-none">
              KIDS
            </a>

            <a href="#" className="text-light position-relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
            </a>

            <NavDropdown
              title={
                <img
                  src="/Netflix images/kids_icon.png"
                  alt="Avatar"
                  width="32"
                  height="32"
                  className="rounded"
                />
              }
              id="profileDropdown"
              align="end"
            >
           <Link className={location.pathname === '/profilo' ? 'nav-link active' : 'nav-link'}to="profilo"> Profilo</Link>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
