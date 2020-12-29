import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2.4rem 0;

    @media (max-width: 620px){
        margin: 2.2rem 0;
    }
    @media (max-width: 420px){
        margin: 2rem 0;
    }
`;
export const List = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;

    li{
        align-content: center;
        padding: 5px 40px;
        margin-right: 16px;
        text-align: center;
        font-size: 13px;
        background-color: var(--accent);
        cursor: pointer;
    }
    li:last-child{
        margin-right: 0;
    }

    @media (max-width: 620px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 14px;

        li{
            display: flex;
            justify-content: center;
            margin: 0;
            width: 100%;
        }
    }
    @media (max-width: 420px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 12px;

        li{
            display: flex;
            justify-content: center;
            margin: 0;
            width: 100%;
        }
    }
`;