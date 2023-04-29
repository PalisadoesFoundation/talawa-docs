import React from "react";
import  Section  from "./Section";
import  TwoColumns  from "./TwoColumns";
import  TextColumn  from "./TextColumn";
import { textContent } from "../utils/textcontent";

interface NativeDevelopmentProps {
  className?: string;
}

 function NativeDevelopment({ className }: NativeDevelopmentProps) {
  return (
    <Section className={`NativeDevelopment ${className}`} background="tint">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn
            title="Many Useful Admin Features"
            text={textContent.forEveryone}
          />
        }
        columnTwo={
          <div className="dissection">
            <img
              alt="talawa"
              src="img/Fourth-Panel-Image.png"
              className="native-development-image"
            />
          </div>
        }
      />
    </Section>
  );
}

export default NativeDevelopment