import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(value) {
    setHistory(history => [...history, value])
    // return 
    setMode(value)
       

    // return {mode}
  }

  function back() {
    console.log("history in back", history)
    setMode(history[history.length-2])
    setHistory(history.slice(0,-1))
    // return 

    // return {mode}

  }
// console.log(transition, back)
console.log(mode)
console.log("history", history )
return { mode, transition, back };

 
}

