import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 65px;
    background-color: var(--secondary);
    padding: 0 18%;
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 620px){
        padding: 0 10%;
    }
    @media (max-width: 420px){
        padding: 0 4%;
    }
`;
export const Mercarico = styled.div`
    width: 132px;
    height: 26px;
    display: block;
    align-items: center;
    align-content: center;

    img{
        width: 100%;
        height: 100%;
    }

    @media (max-width: 620px){
        width: 118px;
        height: 20px;
    }
    @media (max-width: 420px){
        width: 100px;
        height: 18px;
    }
`;
export const Links = styled.div`
    display: flex;
    flex-direction: row;

    a{
        text-decoration: none;
        color: var(--white);
        margin-right: 16px;
        font-size: 14px;
    }
    a:last-child{
        margin-right: 0;
    }

    @media (max-width: 620px){
        a{
            font-size: 13px;
        }
    }
    @media (max-width: 420px){
        a{
            font-size: 12px;
        }
    }
`;