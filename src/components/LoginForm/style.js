import styled from 'styled-components';

export const ContentForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

    input{
        width: 100%;
        height: 45px;
        background-color: var(--inputs);
        border: none;
        outline: none;
        padding: 0 18px;
        margin-bottom: 6px;
        color: var(--white);
        font-size: 14px;
    }
    input::placeholder{
        color: #D0D0D0;
    }
    button{
        height: 45px;
        background-color: #8639C2;
        border: none;
        outline: none;
        color: var(--white);
        font-size: 15px;
        font-weight: 500;
        margin-top: 10px;
    }

    @media (max-width: 620px){
        input{
            padding: 0 14px;
            font-size: 12px;
        }
        button{
            font-size: 13px;
        }
    }
`;