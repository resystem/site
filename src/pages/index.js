import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="RE/SYSTEM - CRIATIVO" />
    <div>
      <img className="logo" src="/images/pink-logo.svg" alt="ReSystem Logo" />
      <p>contato@resystem.org</p>
    </div>
  </Layout>
);

export default IndexPage;
