import React from 'react';
import SubjectCard from './subjectCard';
import { useState } from 'react';

interface Props {
    ind: Number;
    setOpen: Function;
    setSub: Function;
    tab: String[]
}
class Model extends React.Component<Props>{
    render() {
        return (
            <div>
                <SubjectCard setOpen={this.props.setOpen} ind={this.props.ind} setSub={this.props.setSub} tab={this.props.tab} />
            </div>
        );
    }
}
export default Model; 