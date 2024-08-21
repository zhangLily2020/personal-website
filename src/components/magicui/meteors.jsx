/* eslint-disable react/prop-types */
"use client";;
import { useEffect, useState } from "react";

import { cn } from "/Users/zhang/personal-website/src/library/utils.js";

export const Meteors = ({
  number = 20
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: 15,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (<>
    {[...meteorStyles].map((style, idx) => (
      // Meteor Head
      (<span
        key={idx}
        className={
        cn(
          "pointer-events-none absolute left-1/2 top-1/2 size-1 rotate-[215deg] animate-meteor rounded-full bg-white shadow-[0_0_0_1px_#ffffff10]")}
        style={style}>
        {/* Meteor Tail */}
        <div
          className="pointer-events-none absolute top-1/2 -z-10 h-4/6 w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
      </span>)
    ))}
  </>);
};

export default Meteors;
