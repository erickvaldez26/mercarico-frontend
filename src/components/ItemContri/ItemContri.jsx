import React from 'react';
import imgBack from '../../assets/imgback.svg';

import { Container, Item, HeadItem, FooterItem } from './style';

const ItemContri = () => {

    const objs = [
        {
            id: 0,
            name: "El parral",
            reference: "Cerca al centro civico de comas",
            photo: "https://img10.naventcdn.com/avisos/11/00/53/41/33/95/1200x1200/82756700.jpg"
        },
        {
            id: 1,
            name: "Chacra Cerro",
            reference: "Cerca al Mall de Comas",
            photo: null
        },
        {
            id: 3,
            name: "Unicachi",
            reference: "Mercado que todos conocen no jodas",
            photo: "https://elcomercio.pe/resizer/dY-XW7U1Jx6haKcNBawZbA_1DDE=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/UORREUKWCZFQXPPGJC5P7A5NKE.jpg"
        },
        {
            id: 4,
            name: "Mercado Hiper",
            reference: "Frente al colegio Peruano Suizo",
            photo: null
        },
        {
            id: 5,
            name: "Futuro Peru",
            reference: "Al lado de la Ugel 04 de comas",
            photo: null
        },
        {
            id: 6,
            name: "Mercado Modelo",
            reference: "Al lado del centro civico de comas",
            photo: null
        },
        {
            id: 7,
            name: "Mercado del 11",
            reference: "Subiendo Belaunde - 6 cuadras",
            photo: null
        }
    ]

    const item = objs.map((market) => 
        <Item key={market.id.toString()}>
            <HeadItem>
                {market.photo === null? (
                    <img src={imgBack} alt={market.name}/>
                ): (
                    <img src={market.photo} alt={market.name}/>
                )}
            </HeadItem>
            <FooterItem>
                <span>{market.name}</span>
                <p>{market.reference}</p>
            </FooterItem>
        </Item>
    )

    return (
        <Container>
            {item}
        </Container>
    )
}

export default ItemContri;