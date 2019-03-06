import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta';
// import Header from './Header';

const theme = {
  orange: '#ff7000',
  blue: '#12154E',
  black: '#1B1B1B',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  mobileWidth1: '1000px',
  mobileWidth2: '700px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0, 0.9)',
  bs2: '0 12px 12px 0 #ff700070',
};

const StyledPage = styled.div`
  background: ${props => props.theme.black};
  position: absolute;
  top: 0;
  height: 100vh; width: 100vw;
  color: #ffffff;
`;
const Inner = styled.div`
  /* background: red; */
`;

injectGlobal`
@font-face {
  font-family: 'Poppins', sans-serif;
  src: url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');
  font-weight: normal;
  font-style: normal;

}
html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
  height: 100vh;
  overflow-x: hidden;
  font-family: 'Poppins';
  a {
    text-decoration: none;
    color: ${theme.offWhite};
  }
}
`;

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          {/* <Header /> */}
          <Inner>
            {this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}
