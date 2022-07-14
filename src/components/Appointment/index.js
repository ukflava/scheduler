import React, { Fragment } from 'react'
import "./styles.scss";
import classNames from "classnames";

import Empty from "./Empty.js";
import Header from "./Header.js";
import Show from "./Show.js";
// import Confirm from "./Confirm.js";
// import Status from "./Status.js";

export default function Appointment(props) {

  const AppointmentClass = classNames("appointment");

  return (
    <>
 <Header time={props.time} />
  <article className={AppointmentClass}>
{props.interview?<Show  student={props.interview.student} interviewer={props.interview.interviewer}/>:<Empty />}
</article>
  </>
    );


//   return (
//     console.log(" ")
//   );
}

// export default function Appointment