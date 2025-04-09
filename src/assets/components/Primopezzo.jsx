const Primopezzo = function() {
    return (
    
        <div className="container-fluid d-flex justify-content-between align-items-center  p-3 bg-dark text-light " data-bs-theme="dark">
            <div className="d-flex align-items-center ">
                <h1 className="m-0">TV Shows</h1>
                <div className="dropdown">
                    <button
                        type="button"
                        className="btn btn-dark dropdown-toggle bg-black border border-light rounded-0 m-2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <span className="text-light text-decoration-none">Genres</span>
                    </button>
                    <ul className="dropdown-menu bg-dark" data-bs-theme="dark">
                        <li><a className="dropdown-item text-light" href="#">Action</a></li>
                        <li><a className="dropdown-item text-light" href="#">Horror</a></li>
                        <li><a className="dropdown-item text-light" href="#">Fantasy</a></li>
                        <li><a className="dropdown-item text-light" href="#">Romance</a></li>
                        <li><a className="dropdown-item text-light" href="#">Comedy</a></li>
                    </ul>
                </div>
            </div>

            <div className="d-flex align-items-center my-0 mx-5 gap-1 p-0">
                <a
                    href="#"
                    className="text-light position-relative border border-white rounded p-2 opacity-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="15"
                        fill="currentColor"
                        className="bi bi-border-width"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"
                        />
                    </svg>
                </a>
                <a
                    href="#"
                    className="text-light position-relative border border-white rounded p-2 opacity-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="15"
                        fill="currentColor"
                        className="bi bi-border-all"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M0 0h16v16H0zm1 1v6.5h6.5V1zm7.5 0v6.5H15V1zM15 8.5H8.5V15H15zM7.5 15V8.5H1V15z"
                        />
                    </svg>
                </a>
            </div>
        </div>
    
    );
}

export default Primopezzo;
