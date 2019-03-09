import Link from 'next/link'
import styled from 'styled-components'

 const SignupDiv = styled.div`
  /* background: red; */
  position: absolute;
  top: 120px;
  right: 60px;
  display: grid;
  width: 210px;
  grid-template-columns: 100px 100px;
  grid-column-gap: 10px;
  z-index: 3;
  div {
    /* background: blue; */
    text-align: center;
    width: 100px;
  }
    .signin {
      background: ${props => props.theme.orange};
      border-radius: 24px;
    }
 `;

const ToSignupComp = () => (
  <SignupDiv>
    <Link href="./signup">
      <a>
        <div>
          Sign Up
        </div>
      </a>
    </Link>
    <Link href="./signin">
      <a>
        <div className="signin">
          Sign In
        </div>
      </a>
    </Link>
  </SignupDiv>
)

export default ToSignupComp;