import { useEffect, useState } from "react";

const usePosition = () => {
  const [position, setPosition] = useState({ x: 10, y: 10 });
  useEffect(() => {
    const setFromEvent = e => {  if(e.pageY > 266 && e.pageY < 536 && e.pageX > 370 && e.pageX < 470) setPosition({ x: e.pageX, y: e.pageY })};
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};
export default usePosition;