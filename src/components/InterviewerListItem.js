import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const InterviewerClass = classNames("interviewers__item", {
    // "day-list__item": props,

    "interviewers__item-image": Image,
    "interviewers__item--selected": props.selected === true,
    "interviewers__item--selected-image": props.selected === true & Image
    
    
  });

// const formatSpots = (input) => {
//   if (input === 1 ) { return "1 spot"}
//   return input === 0 ? "no spots" :  input + " spots"
// };

  return (
// {/* <li className="interviewers__item">
//   <img
//     className="interviewers__item-image"
//     src="https://i.imgur.com/LpaY82x.png"
//     alt="Sylvia Palmer"
//   />
//   Sylvia Palmer
// </li> */}

    
    <li onClick={() => props.setInterviewer(props.id)} className={InterviewerClass}>
      <img className="interviewers__item-image" src={props.avatar} alt={props.name}/>{props.selected? props.name: ""}
     
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