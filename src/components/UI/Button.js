import React from "react";
import classes from "./Button.module.css";

const TheButton = (props) => {
  //Layout and structure of the TheButton component
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
       <p> {props.children}</p>
    </button>
  );
  //END
};

export default TheButton;
