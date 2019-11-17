import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className={`button button--${props.type}`} onClick={props.onClick}>
      {props.type === "play" ? (
        <div className="button__playIcon" />
      ) : (
        <div className="button__ellipses">...</div>
      )}
    </button>
  );
}

export default Button;
