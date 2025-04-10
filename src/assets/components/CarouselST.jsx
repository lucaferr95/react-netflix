import React, { Component } from "react";
import { Link } from "react-router-dom";
// URL della serie ST

const STRANGERTHINGS = "https://www.omdbapi.com/?i=tt3896198&apikey=339d3413&s=Stranger%20Things";

//Funzione a classe
class CaroST extends Component {
  state = {
    filmsST: [],
    loading: true,
    error: null,
  };

  //Fetch per ottenere i dati della serie
  getFilmST = () => {
    fetch(STRANGERTHINGS)
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
        <h4 className="nosifer-regular text-danger m-3">STRANGER THINGS</h4>

        </div>
        <div id="carousel2" className="carousel slide d-block ">
        
        <div className="carousel-inner">
        
        <div className="carousel-item active">
  <div className="row d-flex flex-nowrap row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-2">
    {filmsST.slice(0, 4).map((film, index) => (
      <div className="col d-flex flex-column align-items-center" key={film.imdbID}>
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
        <h5 className="text-danger nosifer-regular">{film.Title}</h5>
        
        {/* Bottone centrato */}
        <Link to={`/movie/${film.imdbID}`} className="btn btn-primary mt-2">
          Dettagli
        </Link>
      </div>
    ))}
  </div>
</div>

        
<div className="carousel-item">
  <div className="row d-flex flex-nowrap row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-2">
    {filmsST.slice(5, 9).map((film, index) => (
      <div className="col d-flex flex-column align-items-center" key={film.imdbID}>
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
        <h5 className="nosifer-regular text-danger">{film.Title}</h5>
        
        {/* Bottone centrato */}
        <Link to={`/movie/${film.imdbID}`} className="btn btn-primary mt-2">
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
          data-bs-target="#carousel2"
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
          data-bs-target="#carousel2"
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

export default CaroST;
