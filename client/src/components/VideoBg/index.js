import React from "react";
import gameMontage from "../video/gameMontage.mp4";
export default function VideoBg() {
  return (
    <div className="vid">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          // top: "41.5%",
          top: "55.5%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={gameMontage} type="video/mp4" />
      </video>
    </div>
  );
}