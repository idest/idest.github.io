import React from 'react';
import { Link } from 'gatsby';
import { LocaleConsumer } from './Layout';
import locales from '../utils/locales';

const LocalizedLink = ({ to, ...props }) => (
  <LocaleConsumer>
    {locale => {
      const path = locales[locale].default
        ? to
        : `/${locales[locale].path}${to}`;
      return <Link to={path} {...props} />;
    }}
  </LocaleConsumer>
);

export default LocalizedLink;
