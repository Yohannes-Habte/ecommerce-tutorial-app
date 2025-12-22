import React from "react";
import { buttonVariants } from "../../styles/uiConfig";

const Button = ({
  children,
  variant = "primary",
  size = "sm",
  rounded = "sm",
  shadow = "sm",
  width,
  ...props
}) => {
  return (
    <button
      className={`${buttonVariants[variant]} ${buttonVariants[size]} ${buttonVariants[rounded]} ${buttonVariants[shadow]} `}
      style={width ? { width } : undefined}
    >
      {children}
    </button>
  );
};

export default Button;

/** 
Dot vs Bracket notation in JavaScript Objects
 * Dot notation: buttonVariants.primary → works if the property name is literally primary
 * Bracket notation: buttonVariants[variant] → works when the property name is stored in a variable.
 */
