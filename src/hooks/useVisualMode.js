import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(value) {
    setHistory(mode)
       

    return setMode(value)
  }

  function back() {
    setMode(history[history.length-1])

    return {mode}

  }
console.log(transition, back)
console.log(mode)
return { mode, transition, back };

 
}

