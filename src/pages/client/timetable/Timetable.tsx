import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ClientService } from "../../../services/client.service";

class Timetable extends React.Component {
    client: any;

    constructor(props: any) {
        super(props);
        this.client = new ClientService();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">CLASSROOMS</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <Link to='/client/home'>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page">Accueil</a>
                                    </li>
                                </Link>
                                <Link to=''>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page">Divertissement</a>
                                    </li>
                                </Link>
                                <Link to=''>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page">Demande</a>
                                    </li>
                                </Link>
                                <Link to=''>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page">Salle</a>
                                    </li>
                                </Link>
                            </ul>
                            <button className="btn btn-outline-success d-flex" onClick={this.client.logout}>Se deconnecter</button>
                        </div>
                    </div>
                </nav>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        )
    }
}

export default Timetable;