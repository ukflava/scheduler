import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const InterviewerClass = classNames("interviewers__item", {
 

    "interviewers__item-image": Image,
    "interviewers__item--selected": props.selected === true,
    "interviewers__item--selected-image": props.selected === true & Image
    
    
  });

return (
  <li className={InterviewerClass} onClick={props.setInterviewer}>
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
    {props.selected && props.name}
  </li>
);


}