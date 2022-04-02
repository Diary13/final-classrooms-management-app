import React from 'react';
import logo from './logo.svg';
import './sidebar menu.css';
import '../../../node_modules/bootstrap/js/src/collapse';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/js/src/dropdown';
import '../../../node_modules/bootstrap/js/dist/dropdown';
import NavMenu from '../navMenu/navbar menu';
import Mention from '../mention/mention';
import Filiere from '../filiere/filiere';

// import '../../bootstrap.min.css';
// import '../../css/style.css';
// import '../../css/owl.carousel.min.css';

function SideMenu() {
  return (
    <div className="SideMenu">
        {/* <div className="wrapper d-flex align-items-stretch"> */}
          
          {/* <div className="" id="navbarTogglerDemo0">
          
            <nav id="sidebar">
              
              
              <div className="p-4 " id="collapseExample" >
                <a href="#" className="img logo rounded-circle mb-5">
                </a>

                    <ul className="list-unstyled components mb-5">
                      <li className="active">
                          <a href="#"><span className="fa fa-home mr-3"></span> Accueil</a>
                      </li>
                      <li>
                          <a href="#"><span className="fa fa-user mr-3"></span> Etudiants</a>
                      </li>
                      <li>
                      <a href="#"><span className="fa fa-briefcase mr-3"></span> Enseignants</a>
                      </li>
                      <li>
                      <a href="#"><span className="fa fa-sticky-note mr-3"></span> Salles</a>
                      </li>
                      <li>
                      <a href="#"><span className="fa fa-suitcase mr-3"></span> Emploi du temps</a>
                      </li>
                      <li>
                      <a href="#"><span className="fa fa-paper-plane mr-3"></span> Déconnexion</a>
                      </li>
                      </ul>

                      
                      

                      <div className="footer">
                      <h3 className="h6 mb-3">Subscribe for newsletter</h3>
                      </div>

              </div>
            </nav>
          </div> */}
            
        {/* <!-- Page Content  --> */}
            {/* <div id="content" className=" container p-2">

              <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand"></a>
                <form className="form-inline">
                  <i className='fa fa-search'></i>
                  <input className='search d-flex' type="search" placeholder="Recherche"/>
                </form>
              </nav>

              <div className="body px-4">
                {/* <h2 className="mb-4">Les mentions et leurs parcours</h2> 
              </div>
            </div> */}
		    {/* </div> */}

        <div className="wrapper d-flex align-items-stretch">
          <div className="sidebar-container sidebar" id="collapseExample">
            <div className="custom-menu ">
              {/* <button type="button" id="sidebarCollapse" className="btn btn-link">
                <i className="fa fa-bars"></i>
                <span className="sr-only">Toggle Menu</span>
              </button> */}
            </div>
            <div className="sidebar-logo container">
                {/* <p> Classrooms managment </p> */}
                <i className="fa fa-user 50"></i>
            </div>
            <ul className="sidebar-navigation">
                <li className="header"><br /></li>
                <li>
                  <a href="#">
                    <i className="fa fa-home" aria-hidden="true"></i> Accueil
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-users" aria-hidden="true"></i> Etudiants
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-user" aria-hidden="true"></i> Enseignants
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-sticky-note" aria-hidden="true"></i> Salles
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-suitcase" aria-hidden="true"></i> Emplois du temps
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-sign-out mr-3" aria-hidden="true"></i> Déconnexion
                  </a>
                </li>
            </ul>
          </div>
          <section className="p-4 my-container">
              <button type="button" id="sidebarCollapse" className="btn btn-link my-4"  data-toggle="collapse" data-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
                <i className="fa fa-bars"></i>
                <span className="sr-only">Toggle Menu</span>
              </button>
          </section>

          <div className="content-container container" id="collapseOne"  aria-labelledby="headingOne" data-parent="#accordionExample">

            <div className="container-fluid ">

              {/* <!-- Main component for a primary marketing message or call to action --> */}
              <div className="jumbotron">
               
              </div>

            </div>
          </div>
        </div>

    </div>
  );
}

export default SideMenu;
