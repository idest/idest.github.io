import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Title from '../components/styled/Title';
import Description from '../components/styled/Description';

export default ({ pageContext: { locale }, data }) => (
  <Layout locale={locale} path="/blog" title="Blog">
    <div>
      <div>
        <Title>{data.file.childBlogJson.title}</Title>
        <Description>{data.file.childBlogJson.description}</Description>
      </div>
      <PostsContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post
            key={node.id}
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
          />
        ))}
      </PostsContainer>
    </div>
  </Layout>
);

const Post = props => (
  <StyledLink to={props.path}>
    <div className={props.className}>
      <PostTitle>
        {props.title}
        <PostDate>{props.date}</PostDate>
      </PostTitle>
      <PostExcerpt>{props.excerpt}</PostExcerpt>
    </div>
  </StyledLink>
);

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  outline: none;
  opacity: 0.75;
  &:hover {
    opacity: 1;
    text-decoration: none;
  }
`;

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

/*
const StyledPost = styled(Post)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
*/

const PostTitle = styled.h3`
  text-align: center;
  margin-bottom: 5px;
`;

const PostDate = styled.span`
  display: block;
  font-size: 0.8rem;
  color: #777;
  margin-top: 10px;
`;

const PostExcerpt = styled.p`
  width: 100%;
  text-align: center;
`;

export const query = graphql`
  query($locale: String) {
    file(name: { eq: $locale }, relativeDirectory: { eq: "locales/blog" }) {
      childBlogJson {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 100
      filter: {
        frontmatter: {
          locale: { eq: $locale }
          template: { eq: "blog-post" }
          published: { eq: true }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`;
