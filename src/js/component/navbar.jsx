import React from "react";

//create your first component
const Navbar = (props) => {
return(
	<nav className="navbar navbar-expand-lg bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Start Boostrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon btn btn-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-muted" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-muted">Service</a>
		  </li>
		  <li className="nav-item">
          <a className="nav-link disabled text-muted ">Contact</a>
        </li>
      </ul>
      </div>
  </div>
</nav>
)
};


export default Navbar;
