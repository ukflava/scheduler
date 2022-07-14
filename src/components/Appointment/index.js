import React, { Fragment } from 'react'
import "./styles.scss";
import Empty from "./Empty.js";
import Header from "./Header.js";
import Show from "./Show.js";
import Confirm from "./Confirm.js";
import Status from "./Status.js";

export default function Appointment(props) {
  return (
    <>
 <Header time={props.time} />
  <article className="appointment"></article>
{props.interview?<Show />:<Empty />}
  </>
    );


//   return (
//     console.log(" ")
//   );
}

// export default function Appointment