import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20%;

    .title{
        margin-top: 2.4rem;
        margin-bottom: .6rem;
        font-size: 20px;
    }

    @media (max-width: 620px){
        padding: 0 12%;
    }
    @media (max-width: 420px){
        padding: 0 4%;
    }
`;