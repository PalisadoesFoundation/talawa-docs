import React from "react";
import  Section  from "../../utils/Section";
import  TwoColumns  from "../../utils/TwoColumns";
import  TextColumn  from "../../utils/TextColumn";
import useBaseUrl from "@docusaurus/useBaseUrl";
import textcontent  from "../../utils/textcontent";

interface SecondPanelProps {}

 const SecondPanel: React.FC<SecondPanelProps> = () => {
  return (
    <Section className="NativeApps" background="tint">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn
            title="Easy Community Organization Management"
            text={textcontent.intro}
          />
        }
        columnTwo={
          <img
            alt=""
            src={useBaseUrl("img/Second-Panel-Image.png")}
            className="second-panel-image"
          />
        }
      />
    </Section>
  );
};

export default SecondPanel