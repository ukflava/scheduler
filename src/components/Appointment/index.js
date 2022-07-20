import React, { Fragment } from 'react'
import "./styles.scss";

import Empty from "./Empty.js";
import Error from "./Error.js";
import Header from "./Header.js";
import Show from "./Show.js";
import Form from "./Form.js";
import Confirm from "./Confirm.js";
import Status from "./Status.js";

import useVisualMode from "hooks/useVisualMode";



export default function Appointment(props) {

  const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";


const { mode, transition, back } = useVisualMode(
  props.interview ? SHOW : EMPTY
);


  // save to Form
function save(name, interviewer) {
  const interview = {
    student: name,
    interviewer
  };
  transition(SAVING, true);
  props.bookInterview(props.id, interview)
  .then(() => transition(SHOW))
  // .catch(() => window.alert("error"), transition(ERROR_SAVE, true))
  .catch(() => transition(ERROR_SAVE, true))


}
function editAppointment() {
  
  transition(EDIT);
}

function deleteAppointment() {
//  console.log("confirm from delete")

 if (mode === CONFIRM) {
  transition(DELETING, true)
  props.cancelInterview(props.id)
  .then(() => transition(EMPTY))
  .catch(() => transition(ERROR_DELETE, true))
}
else {
  transition(CONFIRM);
} 


}



  return (
    
    <article className="appointment" data-testid="appointment">
    
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
          message="Please confirm action *delete appointment*" 
        />}
 {mode === EDIT &&
        <Form 
          name={props.name ? props.name : props.interview.student}
          value={props.value ? props.value: props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
        />
      }
      {mode === ERROR_SAVE && 
        <Error 
          message="Error. Try to save appointment later"
          onClose={back}
        />
      }
      {mode === ERROR_DELETE && 
        <Error 
          message="Error. Try to delete appointment later"
          onClose={back}
        />
      }


  </article>
    );

}

