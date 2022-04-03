import React from 'react';
import './subjectCard.css';
import { useState } from 'react';


interface Props {
    ind: Number;
    setOpen: Function;
    setSub: Function;
    tab: String[]
};


let hstyle = {
    fontWeight: 'bold',
    fontSize: '1rem',
    paddingLeft: '0px',
    color: 'rgb(0,78,100)',
    margin: '0px'

};

let bstyle = {
    margin: '20px',
    padding: '7px'
}

const SubjectCard: React.FC<Props> = (props: Props) => {
    function putSubject() {
        var e = document.getElementById("subjectSelect") as HTMLSelectElement
        var sel = e.selectedIndex;
        var opt = e.options[sel];
        var curSub = (opt).text;
        console.log(curSub)
        props.setSub(props.tab, props.ind, curSub);
        props.setOpen(false)
    }
    return (
        <>
            <div className="modal show fade" >
                <div className="modal-dialog">
                    <div className="modal-content"><div className="modal-header">
                        <h5 className='modal-title' style={hstyle}>Ajout d'une matière</h5>
                    </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="classe">Matière :</label>
                                </div>
                                <div className="col-75">
                                    <select id="subjectSelect">
                                        <option value="gafi">GAFI</option>
                                        <option value="sgbr">SGBDR</option>
                                        <option value="codage">CODAGE</option>
                                        <option value="ondes">ONDES</option>
                                        <option value="pooa">POOA</option>
                                        <option value="elec">ELEC</option>
                                        <option value="crypto">CRYPTO</option>
                                        <option value="uml">UML</option>
                                    </select>
                                </div>
                            </div>
                            <button style={bstyle} type="submit" onClick={putSubject} value="Submit">Save</button>
                            <button style={bstyle} type="reset" value="Reset" onClick={() => props.setOpen(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SubjectCard;

