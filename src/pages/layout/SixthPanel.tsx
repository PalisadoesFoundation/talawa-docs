import React from "react";
import  Section  from "./Section";
import  TwoColumns  from "./TwoColumns";
import  TextColumn  from "./TextColumn";
import  textContent  from "../utils/textcontent";
import CodeBlock from "@theme/CodeBlock";

interface SixthPanelProps {}

 const SixthPanel: React.FC<SixthPanelProps> = () => {
  const { sixthPanel, codeExample } = textContent;

  return (
    <Section className="SixthPanel" background="tint">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Free Software: Created by a global volunteer team"
            text={sixthPanel}
          />
        }
        columnTwo={<CodeBlock language="jsx">{codeExample}</CodeBlock>}
      />
    </Section>
  );
};

export default SixthPanel
