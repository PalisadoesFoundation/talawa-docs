import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import Error404Image from '@site/static/img/errors/404.png'
import styles from './NotFound.css';

export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl flex-center">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <img src={Error404Image} class="img-fluid" alt="image" />
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page">
                  UH, OH! YOU'RE LOST!
                </Translate>
              </h1>
              <p>
                <Translate
                  id="theme.NotFound.p2"
                  description="The 2nd paragraph of the 404 page">
                  The page you are looking for does not exist. Check if you have a typo in the URL. You can click the button below to go back to the homepage.
                </Translate>
              </p>
              <a href="/" className="flex-center clean-link">
                <button className="btn text-center">
                  <Translate
                    id="theme.NotFound.button"
                    description="Button on the 404 page that redirects to the Homepage">
                    HOME
                  </Translate>
                </button>
              </a>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
