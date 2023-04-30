import React from "react";
import  Section  from "../../utils/Section";
import  TwoColumns  from "../../utils/TwoColumns";
import  TextColumn  from "../../utils/TextColumn";
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
            <CodeBlock language="jsx">{codeExample}</CodeBlock>
          ) : (
            <pre>{codeExample}</pre>
          )
        }
      />
    </Section>
  );
};

export default SixthPanel
