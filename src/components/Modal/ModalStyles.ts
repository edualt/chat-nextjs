import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  // background opacity
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  width: 500px;
  padding: 32px;
  border-radius: 4px;
  background: ${props => props.theme.colors.background};
`;

export const ModalTitle = styled.h1`
  font-size: 26px;
  margin-left: 16px;
  margin-bottom: 16px;
`;

export const ModalButton = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;