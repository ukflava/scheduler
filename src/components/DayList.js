import React from "react";

import DayListItem from "components/DayListItem";

export default function DayList(props) {
 
const day = props.days.map(day => {
  return (
  <DayListItem
    key={day.id}
    name={day.name} 
    spots={day.spots} 
    selected={day.name === props.value} 
    setDay={props.onChange} />)
});


  return (

<ul>{day}</ul>

    // <li className={dayClass} onClick={() => props.setDay(props.name)}>
    //   <h2>{props.name}</h2>
    //   <h3>{formatSpots(props.spots)} remaining</h3>
    // </li>
  );
}
