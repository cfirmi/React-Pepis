import styled from 'styled-components';

const PriceTag = styled.span`
  background: ${props => props.theme.orange};
  transform: rotate(3deg);
  color: white;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 2.5rem;
  margin-top: -5px;
  display: inline-block;
`;

export default PriceTag;
