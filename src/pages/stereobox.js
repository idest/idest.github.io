import React from 'react';

class Stereobox extends React.Component {
  componentDidMount() {
    this.props.pageContext.locale === 'es'
      ? window.location.replace('https://idest.github.io/stereobox/#/es')
      : window.location.replace('https://idest.github.io/stereobox');
  }
  render() {
    return <div />;
  }
}

export default Stereobox;
