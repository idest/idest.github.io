import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import LogoLaptop from '../assets/LogoLaptop.png';
//import Title from '../components/styled/Title';
//import Description from '../components/styled/Description';

export default ({ pageContext: { locale }, data }) => (
  <Layout locale={locale} path="/">
    <Wrapper>
      <LogoContainer>
        <Logo src={LogoLaptop} />
      </LogoContainer>
      <Title>
        <Def>
          <WordType>
            <em>{data.file.childIndexJson.ieWordType}</em>
          </WordType>
          <First>
            <strong>1.</strong> [{data.file.childIndexJson.ieWordOrigin}{' '}
            <em>
              <strong>Id est</strong>
            </em>.] {data.file.childIndexJson.ieFirstDef}
          </First>
          <Second>
            <strong>2.</strong> {data.file.childIndexJson.ieSecondDef}
          </Second>
        </Def>
      </Title>
    </Wrapper>
  </Layout>
);
//Description: Explaining things through code and illustration

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const LogoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 150px;
  margin-bottom: 20px;
  justify-content: center;
`;
const Logo = styled.img`
  height: 100%;
  width: auto;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const Def = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1.4em;
`;
const WordType = styled.span``;
const First = styled.span``;
const Second = styled.span``;

export const query = graphql`
  query($locale: String) {
    file(name: { eq: $locale }, relativeDirectory: { eq: "locales/index" }) {
      childIndexJson {
        ieWordType
        ieWordOrigin
        ieFirstDef
        ieSecondDef
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
