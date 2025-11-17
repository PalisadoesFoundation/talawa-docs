import React from 'react';

interface IHeadingProps {
  text: string;
}

const Heading: React.FC<IHeadingProps> = ({ text }) => {
  return <h2 className="Heading">{text}</h2>;
};

export default Heading;
