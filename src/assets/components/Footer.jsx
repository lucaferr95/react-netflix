const MyFooter = function () {
    return (
      <footer className="d-flex flex-column justify-content-start bg-dark text-light py-4" data-bs-theme="dark">
       
        <div className="container opacity-50 w-50 ">
        <div id="footerIcons" className="d-flex justify-content-start gap-3 mb-3 px-3">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-youtube"></i>
        <i className="bi bi-twitter-x"></i>
        </div>
<div className="row row-cols-1 row-cols-md-3">
        
            <div className="col">Audio and subtitles</div>
            <div className="col">Media Center</div>
            <div className="col">Privacy</div>
          </div>
<div className="row row-cols-1 row-cols-md-3">
            <div className="col">Audio description</div>
            <div className="col">Investor Relations</div>
            <div className="col">Legal Notices</div>
          </div>
<div className="row row-cols-1 row-cols-md-3">
            <div className="col">Help Center</div>
            <div className="col">Jobs</div>
            <div className="col">Cookie Preferences</div>
          </div>
          <div className="row row-cols-1 mt-2">
            <div className="col">
              <p>Contact Us</p>
            </div>
          </div>
          <div className="row row-cols-1">
            <div className="col">
              <button
                type="button"
                className="btn btn-outline-light rounded-0 btn-sm"
              >
                Service Code
              </button>
            </div>
          </div>
          <div className="row row-cols-1 mt-2">
            <div className="col">
              <p>@1997 - 2024 Netflix, Inc. </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default MyFooter;
  