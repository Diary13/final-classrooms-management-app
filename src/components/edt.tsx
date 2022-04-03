import React from 'react';
import Card from './card/card';
import TimeTable from './timetable/timetable';
import Model from "./timetable/subjectCard/modelSubject";


interface Props {
}

interface Mystate {
  open: Boolean,
  sub: String,
  ind: Number,
  subs: Array<String>
}


class EDT extends React.Component<Props, Mystate>{

  state: Mystate = {
    open: false,
    sub: "",
    ind: 0,
    subs: [],
  };


  setOpen(value: Boolean) {
    this.setState(_ => ({
      open: value,
    }));
  }

  setInd(value: Number) {
    this.setState(() => ({
      ind: value,
    }));
  }

  setSub(value: String) {
    this.setState(() => ({
      sub: value,
    }));
  }


  setSubs(subTab: Array<String>, i: number, val: String) {
    subTab[i] = val;
    this.setState(() => ({
      subs: subTab
    }));
  }


  render() {

    return (
      <>
        <div>
          <Card />
          <TimeTable setOpen={this.setOpen.bind(this)} subject={this.state.sub} setInd={this.setInd.bind(this)} subjects={this.state.subs} />
        </div>
        {this.state.open ? <Model setOpen={this.setOpen.bind(this)} ind={this.state.ind} setSub={this.setSubs.bind(this)} tab={this.state.subs} /> : null}
      </>
    );
  }
}

export default EDT;