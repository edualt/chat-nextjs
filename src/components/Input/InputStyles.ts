import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 90px;
    background-color: ${props => props.theme.colors.background}};
`;

export const InputStyled = styled.input`
    width: 90%;
    height: 50px;
    background-color: #282729;
    border: none;
    color: white;
    margin-left: 10px;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.5rem;

    &:focus {
        outline: none;
    }
`;
