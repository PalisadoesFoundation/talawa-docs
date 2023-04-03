import React, {useEffect} from 'react';

import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import {setupDissectionAnimation} from './animations/_dissectionAnimation';
import {setupHeaderAnimations} from './animations/_headerAnimation';

const textContent = {
  intro: `
  <ul>
<li>Talawa is an open-source software project to help manage organizations like yours </li>
<li>Your community becomes closer using our mobile app with social media features </li>
<li>The Admin Web Portal makes member, event and volunteer management simpler.</li>
</ul>
  `,
  nativeCode: `
  <ul>
<li>Easily schedule events and track attendance. Reports show who’s coming, and how often </li>
<li>Stay in contact with your membership with individual or group emails, now and in the future </li>
<li>Track your volunteer time and their activity tasks. Make your planning a success </li>
<li>Our intuitive design helps streamline work processes and increases adoption so everyone can benefit </li>
</ul>
  `,
  codeExample: `
import React from 'react';
import {Header} from './Header';

const WelcomeScreen = () => (
  <View>
    <Header title="Welcome to Talawa"/>
    <Text style={heading}>Step One</Text>
    <Text>
    Talawa is powerful, yet intuitive community management software made for religious
    organizations, clubs, charities and other non-profits
    </Text>
    <Text>
    Designed to help you save time, reduce frustration, and accomplish your goals.
    </Text>
    <Text>
    Giving, event management, social media features, plus more.
    </Text>
    <Text>
      Read the docs to discover what to do next:
    </Text>

   </View>
);
  `,
  forEveryone: `
  <ul>
  <li>Simple to use member dashboards</li>
  <li>Member notifications</li>
  <li>Event and volunteer calendars</li>
  <li>Donation management </li>
  <li>Advertising from local companies </li>
  <li>Multi-organization support </li>
  <li>Plugin support for cloud service providers</li>
  </ul>
 `,
  crossPlatform: `
  <ul>
<li>View the social media news feed </li>
<li>Share posts, images and videos </li>
<li>Create events for your groups </li>
<li>Group chat with other members </li>
<li>Receive the latest community news </li>
<li>Get reminders and notifications </li>
<li>Make your community stronger </li>
</ul>
  `,
  sixthPanel: `Talawa is an open-source project. Our active community of volunteers is constantly adding features to make administration easier.</br></br>Their varied perspectives has created a product that is easily adaptable to the cultures and languages of their countries. Contributions from 19 different timezones.
  `,
  seventhPanel:`Talawa was created by The Palisadoes Foundation in 2019 as part of its social outreach programs in Jamaica. Our work was sponsored by local companies wanting to create a globally competitive workforce on the island by sponsoring philanthropic software development internships for university students.<br/><br/>
  In 2021, Palisadoes was accepted into the prestigious Google Summer of Code (GSoC) which expanded  the development team to volunteers around the world. That same year we participated in the GitHub India, GitHub Externship program for both the winter and summer cohorts.<br/><br/>
  Palisadoes was also selected for GSoC in 2022 and 2023. In 2022 the Google Season of Docs (GsoD) selected Palisadoes as a participant. In 2023 our Talawa projects were included in the Outreachy open-source internship program.
  `,
  eightPanel:`<p>Our developer community members are talented, passionate, and amazing. They are always suggesting, coding and documenting new ideas for our software.</p>
  <p>They span across the globe. Explore this space to learn something new from the community.</p>
  <br/>
  <ul>
    <li><a href="/docs/">Explore this site</a></li>
    <li><a href="https://github.com/PalisadoesFoundation" target="_self">Visit our GitHub pages</a></li>
    <li><a href="https://github.com/PalisadoesFoundation/talawa#readme" target="_self">Join our Slack channel</a></li>
  </ul>
  <br/>
  <strong>Jump in and get started!</strong>
  
  `,
  fastRefresh: `
Talawa was created by The Palisadoes Foundation in 2019 as part of its social outreach programs in Jamaica. Our work was sponsored by local companies wanting to create a globally competitive workforce on the island by sponsoring philanthropic software development internships for university students.<br/><br/>In 2021, Palisadoes was accepted into the prestigious Google Summer of Code (GSoC) which expanded  the development team to volunteers around the world. That same year we participated in the GitHub India, GitHub Externship program for both the winter and summer cohorts. <br/><br/>4.	Palisadoes was also selected for GSoC in 2022 and 2023. In 2022 the Google Season of Docs (GsoD) selected Palisadoes as a participant. In 2023 our Talawa projects were included in the Outreachy open source internship program.

  `,
  talks: `
  Get to know our Talawa community by visiting our YouTube channel. There you will find interviews, technical talks, feature reviews with volunteers and much more
<br/><br/>
You can follow the latest news from the Palisadoes team on Twitter.
  `,
};

function Heading({ text }: { text: string }) {
  return <h2 className="Heading">{text}</h2>;
}

interface ActionButtonProps {
  href: string;
  type?: 'primary' | 'secondary';
  target?: string;
  children: React.ReactNode;
  buttonClassName?: string;
}

function ActionButton({ href, type = 'primary', target, children, buttonClassName }: ActionButtonProps) {
  return (
    <a className={`ActionButton ${type} ${buttonClassName}`} href={href} target={target}>
      {children}
    </a>
  );
}

interface TextColumnProps {
  title: string;
  text: string;
  moreContent?: React.ReactNode;
}

function TextColumn({title, text, moreContent}: TextColumnProps) {
  return (
    <>
      <Heading text={title} />
      <div dangerouslySetInnerHTML={{__html: text}} />
      {moreContent}
    </>
  );
}

function HomeCallToAction() {
  return (
    <>
      <ActionButton
        type="primary"
        href="https://github.com/PalisadoesFoundation"
        target="_self"
        buttonClassName="custom-button">
        Learn More
      </ActionButton>
      <ActionButton
        type="secondary"
        href="/docs/"
        target="_self">
        Developers
      </ActionButton>
    </>
  );
}
/*
function TwitterButton() {
  const accountName = 'palisadoesorg';
  return (
    <a
      href={`https://twitter.com/intent/follow?screen_name=${accountName}&region=follow_link`}
      className="twitter-follow-button">
      <div className="icon" />
      Follow @{accountName}
    </a>
  );
}
*/

// function GitHubStarButton() {
//   return (
//     <div className="github-button">
//       <GitHubButton
//         href="https://github.com/facebook/react-native"
//         data-icon="octicon-star"
//         data-size="large"
//         aria-label="Star facebook/react-native on GitHub">
//         Star
//       </GitHubButton>
//     </div>
//   );
// }

interface SectionProps {
  element?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  background?: 'light' | 'dark' | 'tint';
}

export function Section({
  element = 'section',
  children,
  className,
  background = 'light',
}: SectionProps) {
  const El = element;
  return (
    <El
      className={
        className
          ? `Section ${className} ${background}`
          : `Section ${background}`
      }>
      {children}
    </El>
  );
}

interface TwoColumnsProps {
  columnOne: React.ReactNode;
  columnTwo: React.ReactNode;
  reverse?: boolean;
}

function TwoColumns({columnOne, columnTwo, reverse}: TwoColumnsProps) {
  return (
    <div className={`TwoColumns ${reverse ? 'reverse' : ''}`}>
      <div className={`column first ${reverse ? 'right' : 'left'}`}>
        {columnOne}
      </div>
      <div className={`column last ${reverse ? 'left' : 'right'}`}>
        {columnTwo}
      </div>
    </div>
  );
}

function HeaderHero() {
  return (
    <Section background="light" className="HeaderHero">
      <div className="socialLinks">
      </div>
      <TwoColumns
        reverse
        columnOne={<img className="custom-image bounce-animation" src={useBaseUrl('img/image-01.png')} alt="HeaderHero Image" />}
        columnTwo={
          <>
            <h1 className="title">Talawa</h1>
            <h2 className="tagline">Powering Closer Communities</h2>
            <p className="description">For religious organizations, charities and other non-profits</p>
            <div className="buttons">
              <HomeCallToAction />
            </div>
          </>
        }
      />
    </Section>
  );
}

function NativeApps() {
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
        columnTwo={<img alt="" src={useBaseUrl('img/Second-Panel-Image.png')} className="native-apps-image" />
      }
      />
    </Section>
  );
}

function NativeCode() {
  return (
    <Section className="NativeCode" background="light">
      <TwoColumns
        columnOne={
          <TextColumn
            title="More Effective Management"
            text={textContent.nativeCode}
          />
        }
        columnTwo={<img alt="" src={useBaseUrl('img/Third-Panel-Image.png')} className="native-code-image" />}
      />
    </Section>
  );
}

function NativeDevelopment() {
  return (
    <Section className="NativeDevelopment" background="tint">
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
              <img alt="talawa" src="img/Fourth-Panel-Image.png" className="native-development-image" />
          </div>
        }
      />
    </Section>
  );
}
function CrossPlatform() {
  return (
    <Section className="CrossPlatform" >
      <div className="custom-panel">
        <TwoColumns
          columnOne={
            <div className="text-column-offset"> {/* Add the wrapper div here */}
              <TextColumn
                title="Powerful, Fun Mobile Application"
                text={textContent.crossPlatform}
              />
            </div>
          }
          columnTwo={
            <div className="dissection">
              <img alt="talawa" src="img/image-07.jpg" className="crossplatform-image" />
            </div>
          }
        />
      </div>
    </Section>
  );
}

function SixthPanel() {
  return (
    <Section className="SixthPanel" background='tint'>
      <TwoColumns
        columnOne={
          <TextColumn
            title="Free Software: Created by a global volunteer team"
            text={textContent.sixthPanel}
          />
        }
        columnTwo={
          <CodeBlock language="jsx">{textContent.codeExample}</CodeBlock>
        }
      />
    </Section>
  );
}

/* Community */

function Community() {
  return (
    <Section className="Community" background="light">
      <div className="content">
        <Heading text="Globally Recognized, International Participation" />
        <TwoColumns
          columnOne={
            <>
              <p className="firstP">

                <img src={useBaseUrl(`img/talawa-logo-svg.svg`)} alt="" />
                <span>
                Talawa was created by The Palisadoes Foundation in 2019 as part of its social outreach programs in Jamaica. Our work was sponsored by local companies wanting to create a globally competitive workforce on the island by sponsoring philanthropic software development internships for university students.
                </span>
              </p>
              <p>

              In 2021, Palisadoes was accepted into the prestigious Google Summer of Code (GSoC) which expanded  the development team to volunteers around the world. That same year we participated in the GitHub India, GitHub Externship program for both the winter and summer cohorts. 
              </p>
            </>
          }
          columnTwo={
            <>
              <p>
              Palisadoes was also selected for GSoC in 2022 and 2023. In 2022 the Google Season of Docs (GsoD) selected Palisadoes as a participant. In 2023 our Talawa projects were included in the Outreachy open-source internship program.
              </p>
              <img alt="talawa" src="img/Seventh-Panel-Image.png" className="seventh-panel-image" />
            </>
          }
        />
      </div>
    </Section>
  );
}

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
              <img alt="talawa" src="img/people-devices.png" className="eigth-panel-image" />
          </div>
        }
      />
    </Section>
  );
}

const useHomePageAnimations = () => {
  useEffect(() => setupHeaderAnimations(), []);
  useEffect(() => setupDissectionAnimation(), []);
};

const Index = () => {
  useHomePageAnimations();
  return (
    <Layout
      description="Powering Closer Communities"
      wrapperClassName="homepage">
      <Head>
        <title>Talawa-Docs: Powered by The Palisadoes</title>
        <meta
          property="og:title"
          content="Talawa-Docs: Powered by The Palisadoes"
        />
        <meta
          property="twitter:title"
          content="Talawa-Docs: Powered by The Palisadoes"
        />
      </Head>
      <HeaderHero />
      <NativeApps />
      <NativeCode />
      <NativeDevelopment />
      <CrossPlatform />
      <SixthPanel />
      <Community />
      <EightPanel />
    </Layout>
  );
};

export default Index;