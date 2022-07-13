import React from "react";

import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {

const Interviewer = props.interviewers.map(Interviewer => {
  return (
  <InterviewerListItem
    key={Interviewer.id}
    name={Interviewer.name} 
    avatar={Interviewer.avatar} 
    selected={Interviewer.id === props.Interviewer} 
    setInterviewer={props.setInterviewer} />)
});


  return (

<ul>{Interviewer}</ul>

    // <li className={dayClass} onClick={() => props.setDay(props.name)}>
    //   <h2>{props.name}</h2>
    //   <h3>{formatSpots(props.spots)} remaining</h3>
    // </li>
  );
}
