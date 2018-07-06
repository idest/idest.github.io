import React from 'react';
import styled from 'styled-components';
import LogoLaptop from '../assets/LogoLaptop.png';
//import Title from '../components/styled/Title';
//import Description from '../components/styled/Description';

export default ({ data }) => (
  <Wrapper>
    <LogoContainer>
      <Logo src={LogoLaptop} />
    </LogoContainer>
    <Title>
      <Def>
        <WordType>
          <em>abbrev.</em>
        </WordType>
        <First>
          <strong>1.</strong> [Lat.{' '}
          <em>
            <strong>Id est</strong>
          </em>.] That is (to say).
        </First>
        <Second>
          <strong>2.</strong> Interactively Explained.
        </Second>
      </Def>
    </Title>
  </Wrapper>
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
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
