import React from "react";
import  Section  from "./Section";
import  TwoColumns  from "./TwoColumns";
import  TextColumn  from "./TextColumn";
import useBaseUrl from "@docusaurus/useBaseUrl";
import textContent  from "../utils/textcontent";

interface NativeAppsProps {}

 const NativeApps: React.FC<NativeAppsProps> = () => {
  return (
    <Section className="NativeApps" background="tint">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn
            title="Easy Community Organization Management"
            text={textContent.intro}
          />
        }
        columnTwo={
          <img
            alt=""
            src={useBaseUrl("img/Second-Panel-Image.png")}
            className="native-apps-image"
          />
        }
      />
    </Section>
  );
};

export default NativeApps