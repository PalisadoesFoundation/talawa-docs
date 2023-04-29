import React from "react";
import  Section  from "./Section";
import  TextColumn  from "./TextColumn";
import  TwoColumns  from "./TwoColumns";
import { textContent } from "../utils/textcontent";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface NativeCodeProps {}

 const NativeCode: React.FC<NativeCodeProps> = () => {
  const imgUrl = useBaseUrl("img/Third-Panel-Image.png");

  return (
    <Section className="NativeCode" background="light">
      <TwoColumns
        columnOne={
          <TextColumn
            title="More Effective Management"
            text={textContent.nativeCode}
          />
        }
        columnTwo={<img alt="" src={imgUrl} className="native-code-image" />}
      />
    </Section>
  );
};

export default NativeCode