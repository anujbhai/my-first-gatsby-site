import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>

      <StaticImage
        alt=""
        src="../images/icon.png"
      />
    </Layout>
  );
};

export default IndexPage;
