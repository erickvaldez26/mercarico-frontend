import styled from 'styled-components';

export const Container = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;

    .title{
        margin-top: 2.4rem;
        margin-bottom: .6rem;
        font-size: 22px;
        text-align: left;
    }

    @media (max-width: 620px){
        padding: 0 12%;
    }
    @media (max-width: 420px){
        padding: 0 4%;
    }
`;
export const ContentItems = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0.8rem;
    align-items: center;
    align-content: center;
    justify-content: center;

    @media (max-width: 1110px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 620px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 420px){
        grid-template-columns: repeat(1, 1fr);
    }
`;