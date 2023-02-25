import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
`;

export const SectionLeft = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
    border-right: 1px #232023 solid;
`;

export const SectionRight = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
    color: white;
`;

export const Header = styled.div`
    height: 10%;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.background2};
    border-bottom: 1px solid #232023;
`;
