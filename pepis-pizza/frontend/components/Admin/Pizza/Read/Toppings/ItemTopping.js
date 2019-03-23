import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Pricetag from '../../../styles/PriceTag'
import formatMoney from '../../../../../lib/formatMoney'

const Item = styled.div`
  background: #00000050;
  height: 330px;
  width: 100%;
  text-align: center;
  line-height: 15px;
  border-radius: 5px;
  z-index: 1;
`;
const ImageBox = styled.img`
  /* background: purple; */
  height: 220px;
  width: 220px;
  margin-top: 10px; margin-left: 50%;
  transform: translateX(-50%);
`;
const NameBox = styled.p`
  font-size: 16px;
  text-transform: capitalize;
`;
const Delete = styled.div`
  position: absolute;
  font-size: 4rem;
  text-align: left;
  line-height: 17px;
  height: 15px; width: 40px;
  cursor: pointer;
  z-index: 2;
`;

class ItemTopping extends Component {
  static propTypes = {
    toppingItem: PropTypes.object.isRequired,
  };
  render() {
    const { toppingItem } = this.props;
    return (
      <Item>
        <Link href={{
          pathname: 'updateTopping',
          query: { id: toppingItem.id },
          }}
        >
          <div style={{cursor: 'pointer'}}>
            {toppingItem.image && <ImageBox src={toppingItem.image} alt={toppingItem.name} /> }
            <NameBox>{toppingItem.name}</NameBox>
            <Pricetag>{formatMoney(toppingItem.price)}</Pricetag>
          </div>
        </Link>
        <Delete>␡</Delete>
      </Item>
    )
  }
}

export default  ItemTopping;