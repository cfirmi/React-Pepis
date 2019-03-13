import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from '../User/User'
import SigninAdmin from './SigninAdmin'


const PleaseSignIn = (props) => (
  <Query query={CURRENT_USER_QUERY}>
  {({data, loading}) => {
    if(!data.me) {
      return (
        <div>
          <h4 style={{textAlign: 'center', fontWeight: '400', width: '100vw', position: 'absolute', marginTop: '5%'}}>
          Please Sign in with your Admin account 🤗
          </h4>
          <SigninAdmin />
        </div>
      );
    }
    return props.children
  }}
  </Query>
);

export default PleaseSignIn;
