import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  function transition(mode, setMode) {
        setMode("SECOND")

    return {mode}

  }

  return { transition };

 
}

