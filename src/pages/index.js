import React from 'react';
import styled from 'styled-components';
import Title from '../components/styled/Title';
import Description from '../components/styled/Description';

export default ({ data }) => (
  <div>
    <Title>{data.site.siteMetadata.title}</Title>
    <Description>Explaining things through code and illustration.</Description>
  </div>
);

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
