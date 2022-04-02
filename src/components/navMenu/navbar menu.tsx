import React from 'react';
import logo from './logo.svg';
import './navbar menu.css';
// import '../../assets/icons/fontawesome.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
// import '../../bootstrap.min.css';
// import '../../css/style.css';
// import '../../css/owl.carousel.min.css';


function NavMenu() {
  return (
    <section className="mb-4">
		

		<nav className="navbar py-3 navbar-expand-lg navbar-light ftco_navbar  ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	    	<a className="navbar-brand" href="index.html">Magz.</a>
	    	<form action="#" className="searchform order-sm-start order-lg-last">
				<div className="form-group d-flex">
					<input type="text" className="form-control pl-3" placeholder="Search"/>
					<button type="submit" placeholder="" className="form-control search"><span className="fa fa-search"></span></button>
				</div>
			</form>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
				<span className="fa fa-bars"></span> Menu
			</button>
			<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
				<ul className="navbar-nav mr-auto m-auto">
					<li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
					<li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Page</a>
				<div className="dropdown-menu" aria-labelledby="dropdown04">
					<a className="dropdown-item" href="#">Page 1</a>
					<a className="dropdown-item" href="#">Page 2</a>
					<a className="dropdown-item" href="#">Page 3</a>
					<a className="dropdown-item" href="#">Page 4</a>
				</div>
				</li>
					<li className="nav-item"><a href="#" className="nav-link">Catalog</a></li>
					<li className="nav-item"><a href="#" className="nav-link">Work</a></li>
					<li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
				<li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
				</ul>
			</div>
	    </div>
	  </nav>
    {/* <!-- END nav --> */}

	</section>
  );
}

export default NavMenu;
