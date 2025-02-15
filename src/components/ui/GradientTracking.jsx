import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const GradientTracking = (props) => {
  const btnRef = useRef(null);
  const { children } = props;
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleMouseMove = (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      btn.style.setProperty("--x", `${x}px`);
      btn.style.setProperty("--y", `${y}px`);
    };

    btn.addEventListener("mousemove", handleMouseMove);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <div ref={btnRef} className="mouse-cursor-gradient-tracking">{children}</div>;
};
GradientTracking.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GradientTracking;
