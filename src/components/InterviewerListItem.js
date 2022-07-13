import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const InterviewerClass = classNames("interviewers__item", {
    // "day-list__item": props,

    "interviewers__item-image": props.avatar,
    "interviewers__item--selected": props.selected === true
    
    
  });

// const formatSpots = (input) => {
//   if (input === 1 ) { return "1 spot"}
//   return input === 0 ? "no spots" :  input + " spots"
// };

  return (
    <li onClick={() => props.setInterviewer(props.id)} className={InterviewerClass}>
      <h2><img src={props.avatar}/>{props.selected? props.name: ""}</h2>
     
    </li>
  );


// return <li className="interviewers__item">
// <img
//   className="interviewers__item-image"
//   src="https://i.imgur.com/LpaY82x.png"
//   alt="Sylvia Palmer"
// />
// Sylvia Palmer
// </li>
}