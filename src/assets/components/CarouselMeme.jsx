import Fakefilms from '../Fakefilms/mememovies.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const CarouselMeme = function() {
  return (
    <section id="caroFilms" className="d-flex flex-column gy-5 bg-black">
      <div>
        <h4 className="cmf  text-warning m-3">TRUE STORIES</h4>
      </div>
      <div id="carousel5" className="carousel slide d-block" data-bs-ride="carousel">

        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <div className="row d-flex row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-2">
              {Fakefilms.slice(0, 4).map((movie, index) => (
                <div className="col" key={index}>
                  <img
                    src={movie.poster}
                    className="d-block w-100"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                    alt={movie.title}
                  />
                  <h5 className="text-warning cmf ">{movie.title}</h5>
                  <p className="text-white-50 fst-italic " >{movie.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="row d-flex row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-2">
              {Fakefilms.slice(4, 8).map((movie, index) => (
                <div className="col" key={index}>
                  <img
                    src={movie.poster}
                    className="d-block w-100"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                        pointerEvents: "none"
                    }}
                    alt={movie.title}
                  />
                  <h5 className="cmf  text-warning">{movie.title}</h5>
                  <p className="text-white-50 fst-italic " >{movie.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gy-2">
              {Fakefilms.slice(9, 13).map((movie, index) => (
                <div className="col" key={index}>
                  <img
                    src={movie.poster}
                    className="d-block w-100"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                        pointerEvents: "none"
                    }}
                    alt={movie.title}
                  />
                  <h5 className="cmf  text-warning">{movie.title}</h5>
                  <p className="text-white-50 fst-italic " >{movie.description}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel5"
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
          data-bs-target="#carousel5"
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
};

export default CarouselMeme;
