//import React, { useState } from 'react';
import logo from './logo.svg';
import './login.css';
import { ClientService } from '../../services/client.service';

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let mail = formData.get('mail') as string;
    let password = formData.get('password') as string;
    let client = new ClientService();
    client.login({ mail: mail, password: password });
}

function Login() {
    return (
        <div className="Login">
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                                    <div className="text w-100">
                                        <h2>BIENVENUE</h2>
                                    </div>
                                </div>
                                <div className="login-wrap p-4 p-lg-5">
                                    <div className="d-flex">
                                        <div className="w-100">
                                            <h3 className="mb-4">Connexion</h3>
                                        </div>
                                    </div>
                                    <form action="" onSubmit={handleSubmit} className="signin-form">
                                        <div className="form-group mb-3">
                                            <h4 className="label" >ADRESSE E-MAIL</h4>
                                            <input type="text" className="form-control" name="mail" placeholder="Adresse e-mail" required />
                                        </div>
                                        <div className="form-group mb-3">
                                            <h5 className="label" >MOT DE PASSE</h5>
                                            <input type="password" className="form-control" name="password" placeholder="Mot de passe" required />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="form-control btn btn-primary submit px-3">Se connecter</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
