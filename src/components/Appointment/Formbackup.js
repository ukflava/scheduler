// import React, { useState } from 'react';
// import Button from "../Button.js"
// import InterviewerList from "../InterviewerList.js"


// export default function Form(props) {

//   const [student, setStudent] = useState(props.student || "");
// const [interviewer, setInterviewer] = useState(props.interviewer || null);
// const [error, setError] = useState("");

// const reset = () => {
  
//   setStudent("")
//    setInterviewer(null)
// }
// const cancel = () => {
//     reset();
//   props.onCancel()
// }

// function validate() {
//   // if (student === "") {
//   //   setError("Student name cannot be blank");
//   //   return;
    
//   // }
//   // if (interviewer === null) {
//   //   setError("Please select an interviewer");
//   //   return;
//   // }
//   setError("")
//   // props.onSave(student, interviewer.id);
//   props.onSave(student, interviewer);
//   // Save for rest of tests
// }


//   return (
//     <main className="appointment__card appointment__card--create">
//   <section className="appointment__card-left">
//     <form autoComplete="off" onSubmit={event => event.preventDefault()}>
//       <input
//         className="appointment__create-input text--semi-bold"
        
//         name="name"
//         // name={props.name}
//         type="text"
//         placeholder="Enter Student Name"
//         value={student}
//         onChange={(event) => setStudent(event.target.value)}
//         data-testid="student-name-input"
//       />
//       <section className="appointment__validation">{error}</section>
//     </form>
//     <InterviewerList 
//     {...props}
//     interviewers={props.interviewers}
//     value={interviewer}
//     onChange={(event) => setInterviewer(event)}


//       /* your code goes here */
//     />
//   </section>
//   <section className="appointment__card-right">
//     <section className="appointment__actions">
//       <Button danger onClick={cancel}>Cancel</Button>
//       {/* <Button confirm onSubmit={event => event.preventDefault()} onClick={() => props.onSave(student, interviewer)}>Save</Button> */}
//       <Button confirm onClick={validate}>Save</Button>
//     </section>
//   </section>
// </main>
//     );
// //   return (
// //     console.log(" ")
// //   );
// }