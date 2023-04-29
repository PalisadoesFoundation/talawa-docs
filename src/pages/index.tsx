import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import { useHomePageAnimations } from "./hooks/useHomePageAnimations";
import { HeaderHero } from "./layout/HeaderHero";
import { NativeApps } from "./layout/NativeApps";
import { NativeCode } from "./layout/NativeCode";
import { NativeDevelopment } from "./layout/NativeDevlopement";
import { CrossPlatform } from "./layout/CrossPlatform";
import { SixthPanel } from "./layout/SixthPanel";
import { Community } from "./layout/Community";
import { EightPanel } from "./layout/EightPanel";

const Index = () => {
  useHomePageAnimations();

  const pageTitle = "Talawa-Docs: Powered by The Palisadoes";

  return (
    <Layout description="Powering Closer Communities" wrapperClassName="homepage">
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="twitter:title" content={pageTitle} />
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
