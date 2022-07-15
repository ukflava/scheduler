import React, { useState } from 'react';
import Button from "../Button.js"
import InterviewerList from "../InterviewerList.js"


export default function Form(props) {

  const [student, setStudent] = useState(props.student || "");
const [interviewer, setInterviewer] = useState(props.interviewer || null);

const reset = () => {
  
  setStudent("")
   setInterviewer(null)
}
const cancel = () => {
    reset();
  props.onCancel()
}
  return (
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        value={student}
        onChange={(event) => setStudent(event.target.value)}

        /*
          This must be a controlled component
          your code goes here
        */
      />
    </form>
    <InterviewerList {...props}
    value={interviewer}
    onChange={(event) => setInterviewer(event)}


      /* your code goes here */
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onSubmit={event => event.preventDefault()} onClick={() => props.onSave(student, interviewer)}>Save</Button>
    </section>
  </section>
</main>
    );
//   return (
//     console.log(" ")
//   );
}