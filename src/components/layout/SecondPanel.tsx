import React from 'react';
import Section from '../../utils/Section';
// import  TwoColumns  from "../../utils/TwoColumns";
// import  TextColumn  from "../../utils/TextColumn";
// import useBaseUrl from "@docusaurus/useBaseUrl";
// import textcontent  from "../../utils/textcontent";
import OrganizationFeatureCard from '../../utils/OrganizationFeatureCard';

const SecondPanel = () => {
  return (
    <Section className="SecondPanel">
      {/* background-tint removed */}
      <OrganizationFeatureCard />
      {/* <TwoColumns
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
            src={useBaseUrl("img/image-02.png")}
            className="second-panel-image"
          />
        }
      /> */}
    </Section>
  );
};

export default SecondPanel;
