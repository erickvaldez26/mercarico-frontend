import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: var(--secondary);

    img{
        width: 220px;
        margin-bottom: 1.5rem;
    }
    
    @media (max-width: 620px){
        img{
            width: 200px;
            margin-bottom: 1.2rem;
        }
    }
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: auto;
    padding: 1.5rem 1.8rem;
    text-align: center;
    background-color: var(--contrast);

    h2{
        margin-bottom: 1rem;
    }
    p{
        color: var(--primary);
        font-size: 14px;
        margin-top: 12px;
    }
    p:last-child{
        color: var(--white);
        margin-top: 0;
        cursor: pointer;
    }

    @media (max-width: 620px){
        width: 340px;
        padding: 1.2rem 1.4rem;

        h2{
            font-size: 22px;
        }
        p{
            color: var(--primary);
            font-size: 12px;
            margin-top: 18px;
        }
        p:last-child{
            margin-top: 6px;
        }
    }
    @media (max-width: 360px){
        width: 280px;
        padding: 1rem 1rem;

        h2{
            font-size: 20px;
        }
        p{
            color: var(--primary);
            font-size: 12px;
            margin-top: 18px;
        }
        p:last-child{
            margin-top: 6px;
        }
    }
`;