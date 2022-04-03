import React from "react";
import './HomeAdmin.css';
import { ClientService } from "../../../services/client.service";
import image from '../../../assets/images/user.png';

const style: any = {
    ul: {
        color: 'white',
        marginTop: '20px',
        width: '100%'
    },
    div: {
        backgroundColor: '#3CC3BE',
        width: '240px',
        height: '100vh'
    },
    img: {
        marginTop: '40px',
        width: '100px',
        height: '100px',
        borderRadius: '50%'
    },
    li: {
        listStyleType: 'none',
        padding: '10px 15px',
        width: '100%'
    },
    i: {
        paddingRight: '10px',
        fontSize: '20px'
    }
}

class HomeAdmin extends React.Component {
    client: any;
    constructor(props: any) {
        super(props);
        this.client = new ClientService();
    }
    render() {
        return (
            <div id="menu">
                <div style={style.div} className="side-bar" >
                    <div id="img-user-name">
                        <img src={image} alt="f4" style={style.img} /><br />
                        <span id='username'>ADMIN</span>
                    </div>
                    <ul style={style.ul}>
                        <li className="list-menu" style={style.li}><i className="fa fa-home" style={style.i}></i>Accueil</li>
                        <li className="list-menu" style={style.li}><i className="fas fa-graduation-cap" style={style.i}></i>Etudiants</li>
                        <li className="list-menu" style={style.li}><i className="fas fa-graduation-cap" style={style.i}></i>Enseignants</li>
                        <li className="list-menu" style={style.li}><i className="fa fa-calendar" style={style.i}></i>Emploi du temps</li>
                        <li className="list-menu" style={style.li}><i className="fa fa-building-columns" style={style.i}></i>Salles</li>
                        <li className="list-menu" style={style.li}><i className="fa fa-file-signature" style={style.i}></i>Annonces</li>
                        <li className="list-menu" style={style.li} onClick={this.client.logout}><i className="fa fa-sign-out" style={style.i}></i>Se deconnecter</li>
                    </ul>
                </div>
                <div className="header">
                    <i className="fa fa-search"></i>
                    <input id="search" placeholder="Rechercher" type="text" />
                </div>
            </div>
        )
    }
}

export default HomeAdmin;