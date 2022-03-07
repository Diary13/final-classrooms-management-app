import React from 'react';
import './Modal.css';
import { useState } from 'react';

// const [displayBlock, setDisplayBlock] = useState("none");
// const toOpen = () => {
//     setDisplayBlock("block");
// }
// const toClose = () => {
//     setDisplayBlock("none");
// }
interface Props {
    title: string;
    ClassName: any | string;
    OponentClasse: any | string;
    date: any | string;
    setOpen: Function;


};

let hstyle = {
    fontWeight: 'bold',
    fontSize: '2rem',
    paddingLeft: '0px',
    color: 'rgb(0,78,100)',
    margin: '0px'

};



const Modal: React.FC<Props> = (props: Props) => {
    return (
        <>
            <div className="modal show fade" >
                <div className="modal-dialog">
                    <div className="modal-content"><div className="modal-header">
                        <h5 className='modal-title' style={hstyle}>{props.title}</h5>
                        <button className="btn-close" onClick={() => props.setOpen(false)} type="button"></button>

                    </div>
                        <div className="modal-body">
                            <div className="table table-stripped" data-toogle="table" data-search="true" data-url="data.json">
                                <thead>
                                    <tr>
                                        <th data-field="1"> Classe numero 1 </th>
                                        <th data-field="2"> Classe numero 2 </th>
                                        <th data-field="date"> Date de la rencontre </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{props.ClassName}</td>
                                        <td>{props.OponentClasse}</td>
                                        <td>{props.date}</td>
                                    </tr>
                                </tbody>

                            </div>
                        </div></div>
                </div>
            </div>
        </>
    );
}
export default Modal;