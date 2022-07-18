import React, { Fragment } from 'react'
import "./styles.scss";
// import classNames from "classnames";

import Empty from "./Empty.js";
import Header from "./Header.js";
import Show from "./Show.js";
import Form from "./Form.js";
// import Confirm from "./Confirm.js";
import Status from "./Status.js";

import useVisualMode from "hooks/useVisualMode";



export default function Appointment(props) {
// props.interviewers = [];
  const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";


const { mode, transition, back } = useVisualMode(
  props.interview ? SHOW : EMPTY
);


  // const AppointmentClass = classNames("appointment");
  // props.interviewers = [];


  // save to Form
function save(name, interviewer) {
  const interview = {
    student: name,
    interviewer
  };
  transition(SAVING)
  props.bookInterview(props.id, interview).then(() => transition(SHOW))
  


}

function deleteAppointment(id) {
 
  transition(DELETING)
  props.cancelInterview(id).then(() => transition(EMPTY))
  


}



  return (
    
    <>
    
 <Header time={props.time} />
 {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
{mode === SHOW && (
  <Show
    student={props.interview.student}
    interviewer={props.interview.interviewer}
    onDelete={deleteAppointment}
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
{mode === SAVING && <Status message="Saving" />}
{mode === DELETING && <Status message="Deleting" />}

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