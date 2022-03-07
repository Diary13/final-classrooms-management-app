import React from 'react';
import Modal from '../../../components/ModalUI';
import { useState } from 'react';

interface Props {
    setOpen: Function;
}
class Model extends React.Component<Props>{


    obj = {
        affrontements: [
            {
                classe: 'MSI4',
                adverssaire: 'IMTIC4',
                date: 'Lundi 10 Avril 2022',

            },
            {
                classe: 'FIC2',
                adverssaire: 'DTJA2',
                date: 'Mardi 11 Avril 2022',

            }
        ]
    }

    render() {
        const ClassList = this.obj.affrontements.map(function (affrontement) {
            return <tr>{affrontement.classe}</tr>;
        });
        const ListOfOpponents = this.obj.affrontements.map(function (affrontement) {
            return <tr>{affrontement.adverssaire}</tr>;
        });
        const date = this.obj.affrontements.map(function (affrontement) {
            return <tr>{affrontement.date}</tr>;
        });
        return (<div>
            <Modal setOpen={this.props.setOpen} title="Match" ClassName={ClassList} OponentClasse={ListOfOpponents} date={date} />

        </div>
        );
    }
}
export default Model; 
