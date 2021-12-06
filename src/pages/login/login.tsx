import React from 'react';
import logo from './logo.svg';
import './login.css';
// import '../../bootstrap.min.css';
// import '../../css/style.css';
// import '../../css/owl.carousel.min.css';

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
                                    <h2>Welcome to login</h2>
                                    <p>Don't have an account?</p>
                                    <a href="#" className="btn btn-white btn-outline-white">Sign Up</a>
                                </div>
                            </div>
                            <div className="login-wrap p-4 p-lg-5">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">Sign In</h3>
                                    </div>
                                            
                                </div>
                                <form action="#" className="signin-form">
                                    <div className="form-group mb-3">
                                        <label className="label" >Username</label>
                                        <input type="text" className="form-control" placeholder="Username" required/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" >Password</label>
                                    <input type="password" className="form-control" placeholder="Password" required/>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
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
