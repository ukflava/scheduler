import React from "react";
import classNames from "classnames";

import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const InterviewerClass = classNames("interviewers__list", {
    // "day-list__item": props,

    // "interviewers__header": props.avatar,
    // "interviewers__list": props.selected === true
    
    
  });


const Interviewers = props.interviewers.map(Interviewer => {
  return (
  <InterviewerListItem
    key={Interviewer.id}
    id={Interviewer.id}
    name={Interviewer.name} 
    avatar={Interviewer.avatar} 
    selected={Interviewer.id === props.Interviewer} 
    setInterviewer={props.setInterviewer} />)
});


  return (

<ul className={InterviewerClass}>{Interviewers}</ul>

    // <li className={dayClass} onClick={() => props.setDay(props.name)}>
    //   <h2>{props.name}</h2>
    //   <h3>{formatSpots(props.spots)} remaining</h3>
    // </li>
  );
}
