import React, { Fragment } from 'react'
import "./styles.scss";
import classNames from "classnames";

import Empty from "./Empty.js";
import Header from "./Header.js";
import Show from "./Show.js";
import Form from "./Form.js";
// import Confirm from "./Confirm.js";
// import Status from "./Status.js";

import useVisualMode from "hooks/useVisualMode";



export default function Appointment(props) {
// props.interviewers = [];
  const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";


function save(name, interviewer) {
  const interview = {
    student: name,
    interviewer
  };
  props.bookInterview(props.id, interview)
}

const { mode, transition, back } = useVisualMode(
  props.interview ? SHOW : EMPTY
);


  // const AppointmentClass = classNames("appointment");
  // props.interviewers = [];
  return (
    
    <>
    
 <Header time={props.time} />
 {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
{mode === SHOW && (
  <Show
    student={props.interview.student}
    interviewer={props.interview.interviewer}
  />
)}
 {mode === CREATE &&
        <Form
          name={props.name}
          value={props.value}
          interviewers={props.interviewers}
          // interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
          />}


  {/* <article className={AppointmentClass}>
{props.interview?<Show  student={props.interview.student} interviewer={props.interview.interviewer}/>:<Empty />}
</article> */}
  </>
    );


//   return (
//     console.log(" ")
//   );
}

// export default function Appointment