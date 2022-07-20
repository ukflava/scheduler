import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    // "day-list__item": props,
    "day-list__item--selected": props.selected === true,
    "day-list__item--full": !props.spots
    
  });

const formatSpots = (input) => {
  if (input === 1 ) { return "1 spot"}
  return input === 0 ? "no spots" :  input + " spots"
};

  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2>{props.name}</h2>
      <h3>{formatSpots(props.spots)} remaining</h3>
    </li>
  );
}