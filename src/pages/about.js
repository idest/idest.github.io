import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/styled/Title';
import Description from '../components/styled/Description';

export default ({ pageContext: { locale }, data }) => (
  <Layout locale={locale} path="/about">
    <div>
      <Title>{data.file.childAboutJson.title}</Title>
      <Description>{data.file.childAboutJson.description}</Description>
    </div>
  </Layout>
);

export const query = graphql`
  query($locale: String) {
    file(name: { eq: $locale }, relativeDirectory: { eq: "locales/about" }) {
      childAboutJson {
        title
        description
      }
    }
  }
`;
