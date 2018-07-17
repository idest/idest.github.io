import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Title from '../components/styled/Title';
import Description from '../components/styled/Description';

export default ({ pageContext: { locale }, data }) => (
  <Layout locale={locale} path="/about" title="About">
    <Wrapper>
      <Title>{data.file.childAboutJson.title}</Title>
      <Description>{data.file.childAboutJson.description}</Description>
    </Wrapper>
  </Layout>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
