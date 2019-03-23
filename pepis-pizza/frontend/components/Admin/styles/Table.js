import styled from 'styled-components';

const Table = styled.table`
  border-spacing: 0;
  width: 100%;
  border: 1px solid ${props => props.theme.offWhite};
  thead {
    font-size: 10px;
  }
  td,
  th {
    border-bottom: 1px solid ${props => props.theme.offWhite};
    border-right: 1px solid ${props => props.theme.offWhite};
    position: relative;
      padding: 5px;
    &:last-child {
      border-right: none;
      width: 150px;
      button {
        width: 100%;
      }
    }
    label {
      /* background: red; */
      padding: 10px 5px;
      display: block;
      /* margin-left: 50%;
      transform: translateX(-50%); */ 
      :hover {
        background: ${props => props.theme.orange};;
      }
      input {
        margin-left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  tr {
    /* &:hover {
      background: ${props => props.theme.offWhite};
    } */
  }
`;

export default Table;
