import React from 'react';
import { Link } from 'gatsby';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import LocalizedLink from './LocalizedLink';
import locales from '../utils/locales';
import enMessages from '../content/locales/header/en.json';
import esMessages from '../content/locales/header/es.json';
import { media } from '../utils/style';
import logo_letters from '../assets/logo_letters.png';
import twitter from '../assets/twitter.svg';
import github from '../assets/github.svg';
import mail from '../assets/mail.svg';
import A from '../components/styled/A';

const messages = {
  en: enMessages,
  es: esMessages
};

const theme = {
  colors: {
    primary: '#a6b575',
    primary_dark: '#7f8c55',
    secondary: '#eee7cb',
    secondary_dark: '#ebe2c5',
    secondary_darker: '#c5bda4'
  }
};

const {
  Provider: LocaleProvider,
  Consumer: LocaleConsumer
} = React.createContext();

export default ({ children, data, locale, path }) => (
  <LocaleProvider value={locale}>
    <ThemeProvider theme={theme}>
      <Container>
        {locale && (
          <TopBarSection>
            <TopBar>
              {Object.keys(locales).map(lang => (
                <StyledLink
                  to={
                    locales[lang].default
                      ? path
                      : `/${locales[lang].path}${path}`
                  }
                >
                  <LangSpan active={lang === locale} key={lang}>
                    {locales[lang].name}
                  </LangSpan>
                </StyledLink>
              ))}
            </TopBar>
          </TopBarSection>
        )}
        <HeaderSection>
          <Header>
            <HeaderTitle>
              <div style={{ height: '100%' }}>
                <StyledLinkLogo to="/">
                  <Logo src={logo_letters} />
                </StyledLinkLogo>
              </div>
            </HeaderTitle>
            <Nav>
              <LinksList>
                <ListLink to="/projects/">{messages[locale].projects}</ListLink>
                {/*<ListLink to="/blog/">{messages[locale].blog}</ListLink>*/}
                <ListLink to="/about/">{messages[locale].about}</ListLink>
              </LinksList>
            </Nav>
          </Header>
        </HeaderSection>
        <MainSection>
          <Main>{children}</Main>
        </MainSection>
        <FooterSection>
          <Footer>
            <FooterLinks>
              <SocialLink>
                <StyledA href="https://www.github.com/idest">
                  <SocialIcon src={github} />
                  <SocialSpan>idest</SocialSpan>
                </StyledA>
              </SocialLink>
              <SocialLink>
                <StyledA href="mailto:ie@idest.io">
                  <SocialIcon src={mail} />
                  <SocialSpan> ie@idest.io </SocialSpan>
                </StyledA>
              </SocialLink>
            </FooterLinks>
          </Footer>
        </FooterSection>
      </Container>
    </ThemeProvider>
  </LocaleProvider>
);

/*
              <SocialLink>
                <StyledA href="https://www.github.com/idest">
                  <SocialIcon src={github} />
                  <SocialSpan>idest</SocialSpan>
                </StyledA>
              </SocialLink>
              <SocialLink>
                <StyledA href="mailto:ie@idest.io">
                  <SocialIcon src={mail} />
                  <SocialSpan> ie@idest.io </SocialSpan>
                </StyledA>
              </SocialLink>
              */
export { LocaleConsumer };

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
  }
`;

const StyledLocalizedLink = styled(LocalizedLink)`
  color: black;
  text-decoration: none;
  outline: none;
  &:hover {
    text-decoration: none;
    font-weight: bold;
  }
`;

const StyledLinkMenu = StyledLocalizedLink.extend`
  display: flex;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

const StyledLinkLogo = StyledLocalizedLink.extend`
  display: flex;
  align-items: center;
  height: 100%;
  opacity: 0.6;
  &:hover {
    opacity: 1;
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
  `};
`;

const TopBarSection = styled.div`
  width: 100%;
  background-color: #424242;
`;
const TopBar = styled.div`
  height: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 80px;
  ${media.desktop`
    width: 960px;
    margin-left: auto;
    margin-right: auto;
  `};
`;
const LangSpan = styled.span`
  font-size: 0.8em;
  margin-left: 10px;
  color: ${props =>
    props.active
      ? props.theme.colors.secondary_dark
      : props.theme.colors.secondary_darker};
`;
const HeaderSection = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
`;
const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  height: 80px;
  width: 100%;
  ${media.desktop`
    width: 960px; 
    margin-left: auto;
    margin-right: auto;
  `};
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
  height: 85%;
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
const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background-color: ${props => props.theme.colors.secondary};
`;
const Main = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 20px;
  padding-left: 120px;
  padding-right: 120px;
  ${media.desktop`
    width: 960px;
    margin-left: auto;
    margin-right: auto;
  `};
`;
const FooterSection = styled.div`
  flex-shrink: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.primary_dark};
`;
const Footer = styled.footer`
  display: flex;
  height: 40px;
  width: 100%;
  padding: 15px;
  padding-left: 80px;
  padding-right: 80px;
  justify-content: center;
  align-items: center;
  ${media.desktop`
    width: 960px;
    margin-left: auto;
    margin-right: auto;
  `};
`;

const FooterLinks = styled.div`
  display: flex;
  //flex-direction: column;
  height: 100%;
  padding: 5px;
  //justify-content: space-between;
  justify-content: center;
`;

const SocialLink = styled.div`
  display: flex;
  flex: 1;
`;

const StyledA = styled(A)`
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
`;

const SocialIcon = styled.img`
  width: 20px;
  margin-bottom: 0;
`;

const SocialSpan = styled.span`
  padding-left: 5px;
`;
