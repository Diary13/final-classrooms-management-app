import React from 'react';
import './card.css';

export default function Card() {
    return (
        <div>
            <div className="top-card">
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="week">Semaine :</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="week" name="week" placeholder="Entrer la semaine"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="classe">Classe :</label>
                    </div>
                    <div className="col-75">
                        <select id="classe" name="classe">
                            <option value="esiia">ESIIA</option>
                            <option value="igglia">IGGLIA</option>
                            <option value="imticia">IMTICIA</option>
                            <option value="isaia">ISAIA</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="year">Année :</label>
                    </div>
                    <div className="col-75">
                        <select id="classe" name="classe">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

