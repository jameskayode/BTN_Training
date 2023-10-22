// import React from "react";
import PropTypes from "prop-types";
import styles from "../MyProductCardSection/best.module.css";
const Button = ({ text, color, size }) => {
  
  const buttonClassName = `${styles.btn} ${styles[color ?? "success"]} ${
    styles[size ?? "large"]
  }`;

  return <button className={buttonClassName}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary", "success"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Button;
