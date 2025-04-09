import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
// URL della serie ST
const DEATHNOTE= "https://omdbapi.com/?i=tt3896198&apikey=339d3413&s=death%20note";

//Funzione a classe
class CaroDN extends Component {
  state = {
    filmsST: [],
    loading: true,
    error: null,
  };

  //Fetch per ottenere i dati della serie
  getFilmST = () => {
    fetch(DEATHNOTE)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Boom");
        }
      })
      .then((dataST) => {
        console.log("DATA", dataST); 
        if (dataST && dataST.Search) {
          this.setState({ filmsST: dataST.Search, loading: false });
        } else {
          this.setState({ error: "No results found", loading: false });
        }
      })
      .catch((err) => {
        this.setState({ error: err.message, loading: false });
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getFilmST();
  };

  render() {
    const { filmsST, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      //Struttura del mio vecchio carosello con qualche
        <section id="caroFilms" class="d-flex flex-column gy-5 bg-black">
        <div>
        <h4 className="dnf text-light opacity-75 m-3">DEATH NOTE</h4>

        </div>
        <div id="carousel4" className="carousel slide d-block ">
        
        <div className="carousel-inner">
        
          <div className="carousel-item active">
            <div className="row d-flex flex-nowrap row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-2 ">
              {filmsST.slice(0, 4).map((film, index) => (
                <div className="col" key={film.imdbID}>
                  <img
                    src={film.Poster} 
                    className="d-block w-100"
                    style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                    }}
                    alt={film.Title}
                  />
                  <h5 className="text-light opacity-75 dnf">{film.Title}</h5>
                   <Link to={`/movie/${film.imdbID}`} className="btn btn-primary">
                            Dettagli
                          </Link>
                </div>
              ))}
            </div>
          </div>
        
          <div className="carousel-item">
            <div className="row d-flex flex-nowrap row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-2">
              {filmsST.slice(5,10).map((film, index) => (
                <div className="col" key={film.imdbID}>
                  <img
                    src={film.Poster} 
                    className="d-block w-100"
                    style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                    }}S
                    alt={film.Title}
                  />
                  <h5 className="dnf text-light opacity-75">{film.Title}</h5>
                  <Link to={`/movie/${film.imdbID}`} className="btn btn-primary">
                           Dettagli
                         </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel4"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel4"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </section>
    );
  }
}

export default CaroDN;
