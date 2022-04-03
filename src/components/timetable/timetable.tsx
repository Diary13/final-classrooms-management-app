import React from "react";
import { useState } from "react";
import './timetable.css'
import './subjectCard/subjectCard';
import './subjectCard/modelSubject';

interface Props {
    setOpen: Function;
    subject: String;
    setInd: Function;
    subjects: Array<String>;
}

const TimeTable: React.FC<Props> = (props: Props) => {
  
  function open(i:number){
    props.setOpen(true);
    props.setInd(i)
  }
  return (
    <>
    <div>
      <table>
        <tr>
          <th>Heures</th>
          <th>Lundi</th>
          <th>Mardi</th>
          <th>Mercredi</th>
          <th>Jeudi</th>
          <th>Vendredi</th>
          <th>Samedi</th>
        </tr>
        <tr>
        <th>07:15 – 09:15</th>
          <td onClick={() => open(0)}> {props.subjects[0]} </td>
          <td onClick={() => open(4)}> {props.subjects[4]} </td>
          <td  onClick={() => open(8)}> {props.subjects[8]} </td>
          <td  onClick={() => open(12)}> {props.subjects[12]} </td>
          <td onClick={() => open(16)}> {props.subjects[16]} </td>
          <td onClick={() => open(20)}> {props.subjects[20]} </td>
        </tr>
        <tr>
        <th>09:15 – 11:15</th>
          <td onClick={() => open(1)}> {props.subjects[1]} </td>
          <td onClick={() => open(5)}> {props.subjects[5]} </td>
          <td onClick={() => open(9)}> {props.subjects[9]} </td>
          <td onClick={() => open(13)}> {props.subjects[13]} </td>
          <td onClick={() => open(17)}> {props.subjects[17]} </td>
          <td onClick={() => open(21)}> {props.subjects[21]} </td>
        </tr>
        <tr>
        <th>12:30 – 14:00</th>
          <td onClick={() => open(2)}> {props.subjects[2]} </td>
          <td onClick={() => open(6)}> {props.subjects[6]} </td>
          <td onClick={() => open(10)}> {props.subjects[10]} </td>
          <td onClick={() => open(14)}> {props.subjects[14]} </td>
          <td onClick={() => open(18)}> {props.subjects[18]} </td>
          <td onClick={() => open(22)}> {props.subjects[22]} </td>
        </tr>
        <tr>
        <th>14:00 – 15:30</th>
          <td onClick={() => open(3)}> {props.subjects[3]} </td>
          <td onClick={() => open(7)}> {props.subjects[7]} </td>
          <td onClick={() => open(11)}> {props.subjects[11]} </td>
          <td onClick={() => open(15)}> {props.subjects[15]} </td>
          <td onClick={() => open(19)}> {props.subjects[19]} </td>
          <td onClick={() => open(23)}> {props.subjects[23]} </td>
        </tr>
      </table>

    </div>
    </>
  );
}

export default TimeTable;

