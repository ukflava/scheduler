import React from "react";

import DayListItem from "components/DayListItem";

export default function DayList(props) {
  // const dayClass = classNames("day-list__item", {
  //   // "day-list__item": props,
  //   "day-list__item--selected": props.selected,
  //   "day-list__item--full": !props.spots
    
  // });

// const formatSpots = (input) => {
//   if (input === 1 ) { return "1 spot"}
//   return input === 0 ? "no spots" :  input + " spots"
// };
const day = props.days.map(day => {
  return (
  <DayListItem
    key={day.id}
    name={day.name} 
    spots={day.spots} 
    selected={day.name === props.day} 
    setDay={props.setDay} />)
});


  return (

<ul>{day}</ul>

    // <li className={dayClass} onClick={() => props.setDay(props.name)}>
    //   <h2>{props.name}</h2>
    //   <h3>{formatSpots(props.spots)} remaining</h3>
    // </li>
  );
}
