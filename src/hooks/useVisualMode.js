import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(value) {
    setHistory(mode)
        setMode(value)

    return {mode, history}

  }

  function back() {
    setMode(history[history.length-1])

    return {mode}

  }

  return { transition };

 
}

