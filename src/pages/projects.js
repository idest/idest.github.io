import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { media } from '../utils/style';
import Layout from '../components/Layout';
import A from '../components/styled/A';
import Title from '../components/styled/Title';
import Description from '../components/styled/Description';

export default ({ pageContext: { locale }, data }) => (
  <Layout locale={locale} path="/projects">
    <div>
      <Wrapper>
        <Title>{data.file.childProjectsJson.title}</Title>
        <Description>{data.file.childProjectsJson.description}</Description>
      </Wrapper>
      <ProjectsContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <StyledProject
              image={node.frontmatter.image.publicURL}
              title={node.frontmatter.title}
              url={node.frontmatter.url}
              description={node.excerpt}
            />
          );
        })}
      </ProjectsContainer>
    </div>
  </Layout>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Project = props => (
  <StyledA href={props.url}>
    <div className={props.className}>
      <ProjectThumbnail src={props.image} alt="" />
      <ProjectInformation>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectDescription>{props.description}</ProjectDescription>
      </ProjectInformation>
    </div>
  </StyledA>
);

const StyledA = styled(A)`
  opacity: 0.95;
  &:hover {
    opacity: 1;
  }
`;
const ProjectsContainer = styled.div`
  margin-top: 15px;
  ${media.desktop`
    margin-top: 40px;
  `};
`;
const StyledProject = styled(Project)`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  justify-content: center;
  align-items: center;
  ${media.desktop`
    flex-direction: row;
    padding-left: 30px;
    justify-content: flex-end;
  `};
`;
const ProjectThumbnail = styled.img`
  width: 300px;
  height: 150px;

  ${media.desktop`
    margin-right: 30px;
  `};
`;
const ProjectInformation = styled.div`
  width: 100%;
  text-align: justify;
  text-align-last: center;
  ${media.desktop`
    width: 50%;
    text-align: left;
    text-align-last: left;
  `};
`;
const ProjectTitle = styled.h3`
  width: 100%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  ${media.desktop`
    text-align: left;
    margin-bottom: 15px;
  `};
`;
const ProjectDescription = styled.p`
  box-sizing: border-box;
  width: 100%;
  ${media.desktop`
    padding-right: 30px;
  `};
`;

export const query = graphql`
  query($locale: String) {
    file(name: { eq: $locale }, relativeDirectory: { eq: "locales/projects" }) {
      childProjectsJson {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 100
      filter: {
        frontmatter: {
          type: { eq: "project" }
          published: { eq: true }
          locale: { eq: $locale }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            url
            date(formatString: "DD MMMM, YYYY")
            image {
              publicURL
            }
          }
          excerpt
        }
      }
    }
  }
`;
