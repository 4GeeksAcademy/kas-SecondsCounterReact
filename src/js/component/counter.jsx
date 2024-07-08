import React, { useState, useEffect, useRef } from "react";
import { SecondsCounterView } from "./SecondsCounterView";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function Counter() {
  let [count, setCount] = useState(50);

  useInterval(() => {
    setCount(count +- 1);
  }, 1000);

  return <SecondsCounterView seconds={count} />;
}