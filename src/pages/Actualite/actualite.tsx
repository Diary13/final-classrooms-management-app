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
                    <div className="categories-grid wow fadeInLeft">
                        <nav className="categories text-center">
                            <ul className="actualite_filter">
                                <li><a href="" className="active" data-filter="*">Tous</a></li>
                                <li><a href="" data-filter=".photography">Actu 1</a></li>
                                <li><a href="" data-filter=".logo">Actu 2</a></li>
                                <li><a href="" data-filter=".graphics">Actu 3</a></li>
                                <li><a href="" data-filter=".ads">Actu 4</a></li>
                                <li><a href="" data-filter=".fashion">Actu 5x</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* //Section Actualité div */}
            <section className="section" id="actualites">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
                            <div className="web-actuality-block">
                                <h3>Lunch Box</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Eveniet numquam harum quos minus?</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
                            <div className="web-actuality-block">
                                <h3>Lunch Box</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    Minus exercitationem aspernatur corporis quia itaque eveniet ut incidunt quae,
                                     deserunt quo id ex dicta aliquam.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
                            <div className="web-actuality-block">
                                <h3>Lunch Box</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
                            <div className="web-actuality-block">
                                <h3>Lunch Box</h3>
                                <p>Menu du Jour</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
                            <div className="web-actuality-block">
                                <h3>Lunch Box</h3>
                                <p>Menu du Jour</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6 mb-3">
                            <div className="web-actuality-block">
                                <h3>Lunch Box</h3>
                                <p>Menu du Jour</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default actualite;