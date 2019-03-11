import styled from 'styled-components';
import PleaseSignin from '../../components/LoginSignup/PleaseSignin';
import Permissions from '../../components/Admin/Permissions';


const PermissionsPage = props => (
  <div>
    <PleaseSignin>
      <Permissions />
    </PleaseSignin>
  </div>
);

export default PermissionsPage;