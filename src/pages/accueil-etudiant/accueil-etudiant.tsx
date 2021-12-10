import React, { useState } from "react";
import './accueil-etudiant.css';
import Actualite from './Actualite.svg';
import Divertissement from './Divertissement.svg';
import Demande from './Demande.svg';
import Salle from './Salle.svg';
import Emploie_du_temps from './Emploie-du-temps.svg';
import { textChangeRangeIsUnchanged } from "typescript";
import ReactDOM from "react-dom";

function OpenAndClose() {
    const containerMenu = document.querySelector('.container-menu');
    const btnMenu = document.querySelector('.btn-menu');
    // btnMenu?.addEventListener('click', () => {
    //     containerMenu?.classList.toggle('active');
    // });
    containerMenu?.classList.toggle('active');

}

//function Accueil() {
//   return (
// <div className="Accueil">
//     <section >
//         <div className="container-menu ">
//             <div className="btn-menu" onClick={OpenAndClose}>
//                 <div className="ligne">
//                 </div>
//             </div>
//             <div className="blob blob-1">
//                 <img src={Salle} alt="Salle" className="icone" />
//             </div>
//             <div className="blob blob-2">
//                 <img src={Divertissement} alt="Divertissement" className="icone" />
//             </div>
//             <div className="blob blob-3">
//                 <img src={Emploie_du_temps} alt="Emploie_du_temps" className="icone" />
//             </div>
//             <div className="blob blob-4">

//                 <img src={Actualite} alt="actualite" className="icone" />
//             </div>
//             <div className="blob blob-5">
//                 <img src={Demande} alt="Demande" className="icone" />

//             </div>


//         </div>
//     </section >
// </div >
//);
//}
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