import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import  Section  from "../../utils/Section";
import  Heading  from "../../utils/Heading";
import  TwoColumns  from "../../utils/TwoColumns";

const SeventhPanel: React.FC = () => {
  const content = {
    columnOne: (
      <>
        <p className="firstP">
          <img
            src={useBaseUrl(`img/talawa-logo-svg.svg`)}
            alt="Talawa logo"
          />
          <span>
            Talawa was created by The Palisadoes Foundation in 2019 as part of
            its social outreach programs in Jamaica. Our work was sponsored by
            local companies wanting to create a globally competitive workforce
            on the island by sponsoring philanthropic software development
            internships for university students.
          </span>
        </p>
        <p>
          In 2021, Palisadoes was accepted into the prestigious Google Summer of
          Code (GSoC) which expanded the development team to volunteers around
          the world. That same year we participated in the GitHub India, GitHub
          Externship program for both the winter and summer cohorts.
        </p>
      </>
    ),
    columnTwo: (
      <>
        <p>
          Palisadoes was also selected for GSoC in 2022 and 2023. In 2022 the
          Google Season of Docs (GsoD) selected Palisadoes as a participant. In
          2023 our Talawa projects were included in the Outreachy open-source
          internship program.
        </p>
        <img
          alt="talawa"
          src="img/Seventh-Panel-Image.png"
          className="seventh-panel-image"
        />
      </>
    ),
  };

  return (
    <Section className="seventh-panel" background="light">
      <div className="content">
        <Heading text="Globally Recognized, International Participation" />
        <TwoColumns {...content} />
      </div>
    </Section>
  );
};

export default SeventhPanel