import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[5px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    blue_A700: "bg-blue-A700 text-white-A700",
    light_blue_100: "bg-light_blue-100 text-blue-500",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    blue_500: "bg-blue-500 text-white-A700",
    gray_400: "bg-gray-400",
    green_500: "bg-green-500",
  },
  outline: {
    blue_gray_300:
      "border-2 border-blue_gray-300 border-solid text-blue_gray-300",
    gray_400: "border-2 border-gray-400 border-solid text-gray-800",
    blue_500: "border border-blue-500 border-solid text-blue-500",
  },
};
const sizes = { xs: "p-2", sm: "p-[13px]", md: "p-[17px]", lg: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_A700",
    "light_blue_100",
    "blue_gray_900",
    "blue_500",
    "gray_400",
    "green_500",
    "blue_gray_300",
  ]),
};

export { Button };
