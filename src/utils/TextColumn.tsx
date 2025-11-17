import React from 'react';
import Heading from './Heading';

interface ITextColumnProps {
  title: string;
  text: string;
  moreContent?: React.ReactNode;
}

function TextColumn({ title, text, moreContent }: ITextColumnProps) {
  return (
    <>
      <Heading text={title} />
      <div dangerouslySetInnerHTML={{ __html: text }} />
      {moreContent}
    </>
  );
}

export default TextColumn;
