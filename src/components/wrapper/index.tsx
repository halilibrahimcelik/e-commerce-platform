import React from "react";

type Props = {
  children: React.ReactNode;
  customClass?: string;
  component?: string;
};

const Wrapper = ({ children, customClass, component = "div" }: Props) => {
  const Element = component as keyof JSX.IntrinsicElements;
  return (
    <Element
      className={`container mx-auto px-2 md:px-3 xl:px-10 ${
        customClass ? customClass : ""
      }`}
    >
      {children}
    </Element>
  );
};

export default Wrapper;
