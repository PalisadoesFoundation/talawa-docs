import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Highlight from 'prism-react-renderer';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Group Chats',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Connect with your own community groups like never before with Talawa.
        Our app makes it easy and secure to interact with your community.
      </>
      // Highlighted the unique value that Talawa brings, which is facilitating community connections,
      // Slightly changing the description to convey a more positive and reasuring tone
    ),
  },
  {
    title: 'Event calendars',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Plan exciting community events with ease. 
        With Talawa, you can create, schedule, and join events effortlessly.
      </>
      //Modified the statement to emphasize on the fun and engaging  aspect of community events
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Take control of your community by creating and managing multiple organizations with Talawa. 
       Our app empowers you to build and grow your own community.
      </>
      // Rephrased to position Talawa as an empowering tool for users to take control of their communities.
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <p> Explore the numerous posibilities of Talawa</p>
        {/* Added a suggestive paragraph encouraging the users to explore how Talawa can be used or beneficial totheir organization */}
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
