import React from "react";
import  Section  from "./Section";
import  TwoColumns  from "./TwoColumns";
import  TextColumn  from "./TextColumn";
import  textcontent  from "../../utils/textcontent";
import CodeBlock from "@theme/CodeBlock";

interface SixthPanelProps {}

 const SixthPanel: React.FC<SixthPanelProps> = () => {
  const { sixthPanel, codeExample } = textcontent;

  return (
    <Section className="SixthPanel" background="tint">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Free Software: Created by a global volunteer team"
            text={sixthPanel}
          />
        }
        columnTwo={
          typeof window !== 'undefined' ? (
            <CodeBlock language="jsx">{textcontent.codeExample}</CodeBlock>
          ) : (
            <pre>{textcontent.codeExample}</pre>
          )
        }
      />
    </Section>
  );
};

export default SixthPanel
