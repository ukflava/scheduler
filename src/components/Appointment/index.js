import React, { Fragment } from 'react'
import "./styles.scss";
// import classNames from "classnames";

import Empty from "./Empty.js";
import Header from "./Header.js";
import Show from "./Show.js";
import Form from "./Form.js";
import Confirm from "./Confirm.js";
import Status from "./Status.js";

import useVisualMode from "hooks/useVisualMode";



export default function Appointment(props) {
// props.interviewers = [];
  const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";


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
function editAppointment(name, interviewer) {
  if (mode === CONFIRM) {

  const interview = {
    student: name,
    interviewer
  };
  transition(SAVING)
  props.bookInterview(props.id, interview).then(() => transition(SHOW))
  }
  else {
    transition(CONFIRM);
  } 

}

function deleteAppointment() {
 console.log("confirm from delete")

 if (mode === CONFIRM) {
  transition(DELETING)
  props.cancelInterview(props.id).then(() => transition(EMPTY))
}
else {
  transition(CONFIRM);
} 


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
    onEdit={editAppointment}
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
{mode === CONFIRM && 
        <Confirm 
          onCancel={back}
          onConfirm={deleteAppointment}
          message="Confirm your intention to delete appointment" 
        />}
{mode === EDIT && 
        <Form 
          name={props.name}
          value={props.value}
          interviewers={props.interviewers}
          // interviewers={props.interviewers}
          onSave={save}
          onEdit={editAppointment}
          onCancel={back}/>}

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