import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { media } from '../utils/style';
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
          <ol>
            <li>
              [{data.file.childIndexJson.ieWordOrigin}{' '}
              <em>
                <strong>id est</strong>
              </em>.] {data.file.childIndexJson.ieFirstDef}
            </li>
            <li>{data.file.childIndexJson.ieSecondDef}</li>
          </ol>
        </Def>
      </Title>
    </Wrapper>
  </Layout>
);
//Description: Explaining things through code and illustration

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 150px;
  margin-top: 10px;
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
  ${media.desktop`
    margin-bottom: 20px;
  `};
`;
const Def = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1.4em;
`;
const WordType = styled.span``;

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
