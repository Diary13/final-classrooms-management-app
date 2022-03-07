import React from "react";
import { useState } from "react";
import '../../components/ModalUI';
// import foot1 from "../../assets/images/foot1.jpg";
import './Card.css';
import '../../pages/client/Modal/Model';
interface Props {
    image: string;
    title: string;
    setOpen: Function;
}
// const [displayBlock, setDisplayBlock] = useState("none");
// const toOpen = () => {
//     setDisplayBlock("block");
// }
// const toClose = () => {
//     setDisplayBlock("none");
// }


// const [visible, setVisible] = useState<String>("block");
// visible: {
//     state: true
// }


const Card: React.FC<Props> = (props: Props) => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.image} alt="sary" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, nihil.</p>
                <a href="#" onClick={() => props.setOpen(true)} className="btn btn-outline-success"  >Voir plus...</a>
            </div>
        </div >
    );
}
export default Card;

