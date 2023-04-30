import React from "react";
import  Section  from "../../utils/Section";
import  TwoColumns  from "../../utils/TwoColumns";
import  HomeCallToAction  from "../../utils/HomeCallToAction";
import useBaseUrl from "@docusaurus/useBaseUrl";


function HeaderHero() {
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

export default HeaderHero
