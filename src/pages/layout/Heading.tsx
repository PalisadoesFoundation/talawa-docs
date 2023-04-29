import React from "react";

interface HeadingProps {
  text: string;
}

export const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h2 className="Heading">{text}</h2>;
};

