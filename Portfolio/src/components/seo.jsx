import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.gokuljithk.in/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://www.gokuljithk.in/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.gokuljithk.in/profile pic.jpg" />
    </Helmet>
  );
};

export default SEO;