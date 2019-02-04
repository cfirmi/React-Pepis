import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

const pepisLabel = '../static/pepisLabel.svg'

Router.onRouteChangeStart = () => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => {
    NProgress.done();
};
Router.onRouteChangeError = () => {
    NProgress.done();
}

const Logo = styled.h1`
    font-size: 4rem;
    text-align: center;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    @media (max-width: 1300px) {
        margin: 0; 
        text-align: center;
    }
    img {
      margin-top: 25px;
      height: 100px;
    }
`;

const StyledHeader = styled.header`
    .bar {
        border-bottom: 10px solid ${props => props.theme.offWhite};
        display: grid;
        grid-template-columns: auto;
        justify-content: center;
    }
    @media (max-width: 1300px ){ 
        grid-template-columns: auto;
        justify-content: center;
    }
    .sub-bar {
        display: grid;
        grid-template-columns: 1fr;
        border-bottom: 1px solid ${props => props.theme.lightGrey};
    }
`;

const Header = () => (
    <StyledHeader>
        <div className="bar">
            <Logo>
                <Link href="/">
                    <a>
                      <img src={pepisLabel} alt=""/>
                    </a>
                </Link>
            </Logo>
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        {/* As a side slide out component */}
        <div>
           Cart
        </div>
    </StyledHeader>

)
export default Header;