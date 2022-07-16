import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(value, replace = false) {
if (!replace) {
    setHistory(history => [...history, value])
    // return 
    setMode(value)
  }
else{
  setMode(value)

    // return {mode}
  }
}

  function back() {
    // console.log("history in back", history)
    if (history.length > 1) {
    setMode(history[history.length-2])
    setHistory(history.slice(0,-1))
    }
    // return 

    // return {mode}

  }
// console.log(transition, back)
// console.log(mode)
// console.log("history", history )
return { mode, transition, back };

 
}

