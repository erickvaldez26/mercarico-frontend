import styled from 'styled-components';

export const Item = styled.li`
    width: 210px;
    height: 250px;
    display: flex;
    flex-direction: column;
    background-color: var(--accent);
`;
export const HeadItem = styled.div`
    width: 100%;
    height: 60%;

    img{
        width: 100%;
        height: 100%;
        display: block;
        flex-shrink: 0;
        object-fit: cover;
        object-position: center;
    }
`;
export const FooterItem = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    padding: 10px;
    text-align: center;
    color: var(--white);

    span{
        font-weight: 600;
        font-size: 15px;
        margin: 0;
    }
    p{
        font-weight: 400;
        font-size: 13px;
        margin: 0;
    }
`;