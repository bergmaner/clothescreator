import { useEffect, useState } from "react";

const usePosition = (ref) => {
  const [position, setPosition] = useState({ x: 10, y: 10 });
  useEffect(() => {
    const setFromEvent = e => { setPosition({ x: e.pageX, y: e.pageY })};
    ref.current.addEventListener("mousemove", setFromEvent);
    return () => {
      ref.current.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};
export default usePosition;