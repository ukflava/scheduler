import React from "react";
// import classNames from "classnames";

import InterviewerListItem from "components/InterviewerListItem";
// import "components/InterviewerList.scss";
import "components/InterviewerListItem.scss";
export default function InterviewerList(props) {
  // const InterviewerClass = classNames("interviewers__list", {
  //   // "day-list__item": props,

  //   // "interviewers__header": props.avatar,
  //   "interviewers__header": props.selected === true
    
    
  // });


const Interviewers = props.interviewers.map(interviewer => {
  return (
  <InterviewerListItem
    key={interviewer.id}
    id={interviewer.id}
    name={interviewer.name} 
    avatar={interviewer.avatar} 
    selected={interviewer.id === props.interviewer} 
    setInterviewer={props.setInterviewer} />)
});


  return (
    <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{Interviewers}</ul>
</section>

// {/* <ul className={InterviewerClass}>{Interviewers}</ul> */}

    // <li className={dayClass} onClick={() => props.setDay(props.name)}>
    //   <h2>{props.name}</h2>
    //   <h3>{formatSpots(props.spots)} remaining</h3>
    // </li>
  );
}
