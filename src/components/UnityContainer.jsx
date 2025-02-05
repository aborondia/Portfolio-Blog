import "../css/Projects.css";
import { useEffect, useState } from "react";

const UnityContainer = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        title="Unity WebGL Build"
        src="/unity-build/index.html"
        width={windowSize.width}
        height={windowSize.height}
        frameBorder="0"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          border: "none",
        }}
      />
    </div>
  );
};

export default UnityContainer;
