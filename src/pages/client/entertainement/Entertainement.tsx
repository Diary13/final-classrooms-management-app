import React, { useState } from "react";
import './Entertainement.css';
import Card from '../../../components/Cards/CardUI';
import foot from '../../../assets/images/foot3.jpg';
import basket from "../../../assets/images/basket2.jpg";
import volley from "../../../assets/images/volley1.jpg";
import Model from "../../client/Modal/Model";

interface Props {
}

interface Mystate {
    open: Boolean;
}

class Entertainement extends React.Component<Props, Mystate>{

    state: Mystate = {
        open: false
    };

    setOpen(value: Boolean) {
        this.setState(_ => ({
            open: value
        }));
    }

    render() {

        return (
            <>
                <section>
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="row">
                            <h1>Entertainement</h1>
                            <div className="col-md-4">
                                <Card setOpen={this.setOpen.bind(this)} image={foot} title="Football" />
                            </div>
                            <div className="col-md-4">
                                <Card setOpen={this.setOpen.bind(this)} image={basket} title="Basketball" />
                            </div>
                            <div className="col-md-4">
                                <Card setOpen={this.setOpen.bind(this)} image={volley} title="VolleyBall" />
                            </div>

                        </div>
                    </div>
                    {this.state.open ? <Model setOpen={this.setOpen.bind(this)} /> : null}
                </section>
            </>

        );
    }
}

// const Entertainement = () => {

//     const [open, setOpen] = useState(false)

//     return (
//         <>
//             <section>
//                 <div className="container-fluid d-flex justify-content-center">
//                     <div className="row">
//                         <h1>Entertainement</h1>
//                         <div className="col-md-4">
//                             <Card setOpen={setOpen} image={foot} title="Football" />
//                         </div>
//                         <div className="col-md-4">
//                             <Card setOpen={setOpen} image={basket} title="Basketball" />
//                         </div>
//                         <div className="col-md-4">
//                             <Card setOpen={setOpen} image={volley} title="VolleyBall" />
//                         </div>

//                     </div>
//                 </div>

//                 {open ? <Model setOpen={setOpen} /> : null}

//             </section>
//         </>)

// }
export default Entertainement;