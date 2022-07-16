import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(value) {
    setHistory(history => [...history, value])
    return setMode(value)
       

    // return {mode}
  }

  function back() {
   return setMode(history[history.length-1])

    // return {mode}

  }
// console.log(transition, back)
console.log(mode)
console.log("istory", history )
return { mode, transition, back };

 
}

