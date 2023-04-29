import React from "react";
import { Section } from "./Section";
import { TwoColumns } from "./TwoColumns";
import { HomeCallToAction } from "./HomeCallToAction";
import useBaseUrl from "@docusaurus/useBaseUrl";

export function HeaderHero() {
  return (
    <Section background="light" className="HeaderHero">
      <div className="socialLinks"></div>
      <TwoColumns
        reverse
        columnOne={
          <img
            className="custom-image bounce-animation"
            src={useBaseUrl("img/image-01.png")}
            alt="HeaderHero Image"
          />
        }
        columnTwo={
          <>
            <h1 className="title">Talawa</h1>
            <h2 className="tagline">Powering Closer Communities</h2>
            <p className="description">
              For religious organizations, charities and other non-profits
            </p>
            <div className="buttons">
              <HomeCallToAction />
            </div>
          </>
        }
      />
    </Section>
  );
}
