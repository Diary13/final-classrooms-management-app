import React from 'react';
import './actualite.css';

const actualite = () => {
    return (
        <div className='Page_Actialite'>
            {/* //PreLoader */}
            {/* <div id="preloader">
                <div className="pre-container">
                    <div className="spinner">
                        <div className="circle-loader">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* // top bar  */}
            <div className="top-bar">
                <h1>Actualités</h1>
                <p><a href="#">Accueil</a> / Actualités</p>
            </div>

            {/* <div className="main-container actualite-inner clearfix"> */}

            {/* //Actualité div */}
            <div className="actualite-div">
                <div className="actualite">
                   <div className="row">
                        <div className="col-lg-12">
                            <div className="actuality-filter">
                                <button className="active" type="button" data-filter='all'>Tous</button>
                                <button type="button" data-filter='.annonce'>Annonces</button>
                                <button type="button" data-filter='.event'>Evenements</button>
                            </div>
                        </div>
                   </div>                  
                </div>
            </div>

            {/* //Liste Actualité div */}
            


            {/* //Section Actualité div */}
            <section className="section" id="actualites">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3 event" data-category="event">
                            <div className="web-actuality-block">
                                <h3>Evenement 1</h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3 annonce" data-category="annonce">
                            <div className="web-actuality-block">
                                <h3>Annonce 1</h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3 event" data-category="event">
                            <div className="web-actuality-block">
                                <h3>Evenement 2</h3>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3 annonce" data-category="annonce">
                            <div className="web-actuality-block">
                                <h3>Annonce 3</h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3 event" data-category="event">
                            <div className="web-actuality-block">
                                <h3>Evenement 3</h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3 annonce"  data-category="annonce">
                            <div className="web-actuality-block">
                                <h3>Annonce 4</h3>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default actualite;