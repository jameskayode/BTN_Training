import React from "react";

const sizeClasses = {
  txtMontserratBold16: "font-bold font-montserrat",
  txtMontserratBold24: "font-bold font-montserrat",
  txtMontserratBold14: "font-bold font-montserrat",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtMontserratBold14Blue500: "font-bold font-montserrat",
  txtMontserratRegular12Gray600: "font-montserrat font-normal",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsSemiBold14Indigo900: "font-poppins font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsSemiBold13: "font-poppins font-semibold",
  txtPoppinsRegular10: "font-normal font-poppins",
  txtMontserratBold14Gray600: "font-bold font-montserrat",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsRegular14Gray700: "font-normal font-poppins",
  txtMontserratBold14WhiteA700: "font-bold font-montserrat",
  txtMontserratRegular12Blue500: "font-montserrat font-normal",
  txtMontserratBold14Gray400: "font-bold font-montserrat",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtMontserratRegular14: "font-montserrat font-normal",
  txtMontserratRegular12: "font-montserrat font-normal",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
