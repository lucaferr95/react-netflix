import React from "react";


const MyHome = function () {
  const handleRedirect = () => {
    // Reindirizza alla pagina statica, come un URL normale
    window.location.href = "https://www.paypal.com/paypalme/lucaf95"; // Puoi usare qualsiasi URL
  };
  return (
    <main className="d-flex flex-column min-vh-100">
    

      <div className="flex-grow-1 container-fluid bg-dark my-1" data-bs-theme="dark">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-8 mt-5">
            <h1 className="text-white text-center fs-1 fs-bold my-4">Film, serie TV e tanto altro, senza limiti</h1>

            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column flex-md-row align-items-center fs-1 mt-5">
              <img
  src="/Netflix images/netflix_logo.png"
  alt="Profile"
  className="img-fluid rounded-circle w-50"
/>

                <div className="text-white ms-md-3 mt-3 mt-4 md-0">
                  <h4 className="mt-4">A partire da 6,99 €. Disdici quando vuoi.

</h4>
                  <p className="mt-4">Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o riattivare il tuo abbonamento!😎</p>
                </div>
              </div>
            </div>
            <form className="my-4 h-100">
  <div className="row g-2 align-items-center">
    <div className="col-12 col-md-9">
      <input
        type="email"
        className="form-control"
        placeholder="Inserisci il tuo indirizzo email"
        required
      />
    </div>
    <div className="col-12 col-md-3 text-md-end">
    <button type="button" className="btn btn-danger w-100" onClick={handleRedirect}>
                    Inizia
                  </button>
    </div>
  </div>
</form>

          </div>
        </div>
      </div>

    </main>
  );
};

export default MyHome;
