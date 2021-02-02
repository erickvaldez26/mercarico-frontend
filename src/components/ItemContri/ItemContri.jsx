import React from 'react';
import imgBack from '../../assets/imgback.svg';

import { Item, HeadItem, FooterItem } from './style';

const ItemContri = ({market}) => {
    return (
        <Item key={market.id.toString()}>
            <HeadItem>
                {market.photo === null? (
                    <img src={imgBack} alt={market.name}/>
                ): (
                    <img src={market.picture} alt={market.name}/>
                )}
            </HeadItem>
            <FooterItem>
                <span>{market.name}</span>
                <p>{market.reference}</p>
            </FooterItem>
        </Item>
    )
}

export default ItemContri;