import React, { useState } from "react";
import './HomeClient.css';
import Actualite from '../../../assets/logo/Actualite.svg';
import Divertissement from '../../../assets/logo/Divertissement.svg';
import Demande from '../../../assets/logo/Demande.svg';
import Salle from '../../../assets/logo/Salle.svg';
import Emploie_du_temps from '../../../assets/logo/Emploie-du-temps.svg';
import { textChangeRangeIsUnchanged } from "typescript";
import ReactDOM from "react-dom";

function OpenAndClose() {
    const containerMenu = document.querySelector('.container-menu');
    containerMenu?.classList.toggle('active');

}


class Accueil extends React.Component {
    render() {
        return (<div className="Accueil">
            <section >
                <div className="container-menu active">
                    <div className="btn-menu" onClick={OpenAndClose}>
                        <div className="ligne">
                        </div>
                    </div>
                    <div className="blob blob-1">
                        <figure>
                            <img src={Salle} alt="Salle" className="icone" />
                            <figcaption>Salle</figcaption>
                        </figure>
                    </div>
                    <div className="blob blob-2">
                        <figure>
                            <img src={Divertissement} alt="Divertissement" className="icone" />
                            <figcaption>Divertissement</figcaption>
                        </figure>
                    </div>
                    <div className="blob blob-3">
                        <figure>
                            <img src={Emploie_du_temps} alt="Emploie_du_temps" className="icone" />
                            <figcaption>Emploie du temps</figcaption>
                        </figure>
                    </div>
                    <div className="blob blob-4">
                        <figure>
                            <img src={Actualite} alt="actualite" className="icone" />
                            <figcaption>Actualite</figcaption>
                        </figure>
                    </div>
                    <div className="blob blob-5">
                        <figure>
                            <img src={Demande} alt="Demande" className="icone" />
                            <figcaption>Demande</figcaption>
                        </figure>
                    </div>
                </div>
            </section >
        </div >);
    }
}

export default Accueil;