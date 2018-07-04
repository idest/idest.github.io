import React from 'react';
import Link from 'gatsby-link';
import styled, { injectGlobal } from 'styled-components';
import { media } from '../utils/style';
import logo_letters from '../assets/logo_letters.png';
import twitter from '../assets/twitter.svg';
import github from '../assets/github.svg';
import mail from '../assets/mail.svg';
import A from '../components/styled/A';

export default ({ children, data }) => (
  <Container>
    <Header>
      <HeaderTitle
        style={{
          background: data.site.siteMetadata.colors.primary
        }}
      >
        <div style={{ height: '100%' }}>
          <StyledLinkLogo to="/">
            <Logo src={logo_letters} />
          </StyledLinkLogo>
        </div>
      </HeaderTitle>
      <Nav
        style={{
          background: data.site.siteMetadata.colors.primary
        }}
      >
        <LinksList>
          <ListLink to="/projects/">Projects</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/about/">About</ListLink>
        </LinksList>
      </Nav>
    </Header>
    <Main>{children()}</Main>
    <Footer
      style={{
        background: data.site.siteMetadata.colors.secondary
      }}
    >
      <FooterLinks>
        <StyledA href="https://www.github.com/idest">
          <SocialLink>
            <SocialIcon src={github} />
            <SocialSpan>idest</SocialSpan>
          </SocialLink>
        </StyledA>
        <StyledA href="mailto:ie@idest.io">
          <SocialLink>
            <SocialIcon src={mail} />
            <SocialSpan> ie@idest.io </SocialSpan>
          </SocialLink>
        </StyledA>
        <StyledA href="https://www.twitter.com/inigoecheverria">
          <SocialLink>
            <SocialIcon src={twitter} />
            <SocialSpan>@inigoecheverria</SocialSpan>
          </SocialLink>
        </StyledA>
      </FooterLinks>
      <span>© 2018 Iñigo Echeverría</span>
    </Footer>
  </Container>
);

const ListLink = props => (
  <LinkItem>
    <StyledLinkMenu to={props.to}>
      <h3>{props.children}</h3>
    </StyledLinkMenu>
  </LinkItem>
);

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  outline: none;
  &:hover {
    text-decoration: none;
    font-weight: bold;
  }
`;

const StyledLinkMenu = StyledLink.extend`
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

const StyledLinkLogo = StyledLink.extend`
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

const StyledA = styled(A)`
  opacity: 0.75;
  &:hover {
    opacity: 1;
    font-weight: bold;
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  ${media.desktop`
    margin-left: auto;
    margin-right: auto;
    width: 960px;
  `};
`;

const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  height: 70px;
  width: 100%;
`;

const HeaderTitle = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 30%;
  height: 100%;
  padding-left: 80px;
  align-items: center;
`;

const Logo = styled.img`
  box-sizing: border-box;
  height: 100%;
  width: auto;
  margin: 0;
  padding: 10px;
`;

const Nav = styled.nav`
  box-sizing: border-box;
  display: flex;
  width: 70%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 80px;
  padding-bottom: 10px;
`;

const LinksList = styled.ul`
  margin: 0;
`;

const LinkItem = styled.li`
  display: inline-block;
  margin: 0;
  margin-left: 1rem;
`;

const Main = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  flex: 1;
`;

const Footer = styled.footer`
  height: 150px;
  width: 100%;
  padding: 15px;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px;
  justify-content: space-between;
`;

const SocialLink = styled.div`
  display: flex;
`;

const SocialIcon = styled.img`
  margin-bottom: 0;
  width: 20px;
  height: auto;
`;

const SocialSpan = styled.span`
  padding-left: 10px;
`;

export const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        shortTitle
        colors {
          primary
          secondary
        }
      }
    }
  }
`;
