import React from "react";
import { Section } from "./Section";
import { TwoColumns } from "./TwoColumns";
import { TextColumn } from "./TextColumn";
import { textContent } from "../utils/textcontent";

export function CrossPlatform() {
  return (
    <Section className="CrossPlatform">
      <div className="custom-panel">
        <div className="wrapper">
          <TwoColumns
            columnOne={
              <div className="text-column-offset">
                <TextColumn
                  title="Powerful, Fun Mobile Application"
                  text={textContent.crossPlatform}
                />
              </div>
            }
            columnTwo={
              <div className="dissection">
                <img
                  alt="talawa"
                  src="img/image-07.jpg"
                  className="crossplatform-image"
                />
              </div>
            }
          />
        </div>
      </div>
    </Section>
  );
}
