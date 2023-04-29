import React from "react";
import  Section  from "./Section";
import  TextColumn  from "./TextColumn";
import  TwoColumns  from "./TwoColumns";
import  textContent  from "../utils/textcontent";

 function EightPanel() {
  return (
    <Section className="EightPanel" background="tint">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn
            title="Join Our Developer Community"
            text={textContent.eightPanel}
          />
        }
        columnTwo={
          <div className="dissection">
            <img
              alt="people using devices"
              src="img/people-devices.png"
              className="eigth-panel-image"
            />
          </div>
        }
      />
    </Section>
  );
}

export default EightPanel
