import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import A from '../components/styled/A';
import Title from '../components/styled/Title';
import Description from '../components/styled/Description';

export default ({ data }) => (
  <div>
    <div>
      <Title>Projects</Title>
      <Description>Here's a list of my projects</Description>
    </div>
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
);

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
  margin-top: 40px;
`;
const StyledProject = styled(Project)`
  display: flex;
  padding-left: 30px;
  justify-content: flex-end;
  margin-bottom: 25px;
`;
const ProjectThumbnail = styled.img`
  margin-right: 30px;
  width: 300px;
  height: auto;
`;
const ProjectInformation = styled.div`
  width: 50%;
`;
const ProjectTitle = styled.h3`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;
`;
const ProjectDescription = styled.p`
  box-sizing: border-box;
  width: 100%;
  padding-right: 30px;
`;

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 100
      filter: {
        frontmatter: { type: { eq: "project" }, published: { eq: true } }
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
