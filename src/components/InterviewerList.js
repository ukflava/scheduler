import React from "react";

import DayListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {
  // const dayClass = classNames("day-list__item", {
  //   // "day-list__item": props,
  //   "day-list__item--selected": props.selected,
  //   "day-list__item--full": !props.spots
    
  // });

// const formatSpots = (input) => {
//   if (input === 1 ) { return "1 spot"}
//   return input === 0 ? "no spots" :  input + " spots"
// };
const Interviewer = props.days.map(Interviewer => {
  return (
  <DayListItem
    key={Interviewer.id}
    name={Interviewer.name} 
    avatar={Interviewer.avatar} 
    selected={Interviewer.name === props.name} 
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
