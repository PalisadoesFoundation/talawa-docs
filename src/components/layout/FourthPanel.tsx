import React from "react";
import  Section  from "../../utils/Section";
import  TwoColumns  from "../../utils/TwoColumns";
import  TextColumn  from "../../utils/TextColumn";
import textcontent  from "../../utils/textcontent";

interface FourthPanelProps {
  className?: string;
}

 function FourthPanelProps({ className }: FourthPanelProps) {
  return (
    <Section className={`NativeDevelopment ${className}`} background="tint">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn
            title="Many Useful Admin Features"
            text={textcontent.forEveryone}
          />
        }
        columnTwo={
          <div className="dissection">
            <img
              alt="talawa"
              src="img/Fourth-Panel-Image.png"
              className="fourth-panel-image"
            />
          </div>
        }
      />
    </Section>
  );
}

export default FourthPanelProps