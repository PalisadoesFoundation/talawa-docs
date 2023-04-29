import React from "react";
import { Heading } from "./Heading";

interface TextColumnProps {
  title: string;
  text: string;
  moreContent?: React.ReactNode;
}

export function TextColumn({ title, text, moreContent }: TextColumnProps) {
  return (
    <>
      <Heading text={title} />
      <div dangerouslySetInnerHTML={{ __html: text }} />
      {moreContent}
    </>
  );
}
