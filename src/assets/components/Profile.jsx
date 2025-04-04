import React from "react";

const ProfileComponent = function () {
  return (
    <div className="container bg-dark my-1 w-100" data-bs-theme="dark ">

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="text-white">Edit Profile</h1>

          <div className="d-flex align-items-center">
            <div
              id="img"
              className="d-flex flex-column flex-md-row align-items-center"
            >
              <img
                src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
                alt="Profile"
                className="profile-img img-fluid w-25 w-md-25 h25"
              />
              <button className="btn btn-secondary text-light btn-lg ms-md-3 mt-3 mt-md-0">
                Strive student
              </button>
            </div>
          </div>

          <div className="mt-4">
            <label className="form-label text-light">Language:</label>
            <select className="form-select bg-dark text-white">
              <option>English</option>
              <option>Italiano</option>
              <option>Français</option>
            </select>
          </div>

          <div className="mt-4">
            <h5 className="text-light">Maturity Settings</h5>
            <button className="btn btn-secondary">ALL MATURITY RATINGS</button>
            <p className="text-light">
              Show titles of <strong>all maturity ratings</strong> for this profile.
            </p>
            <button className="btn btn-outline-dark">EDIT</button>
          </div>

          <div className="mt-4">
            <h5 className="text-light">Autoplay controls</h5>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label text-light">
                Autoplay next episode in a series on all devices.
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultChecked />
              <label className="form-check-label text-light">
                Autoplay previews while browsing on all devices.
              </label>
            </div>
          </div>

          <hr className="border-secondary" />

          <div className="d-flex gap-3 mb-4">
            <button className="btn btn-light">SAVE</button>
            <button className="btn btn-outline-dark">CANCEL</button>
            <button className="btn btn-outline-dark">DELETE PROFILE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
