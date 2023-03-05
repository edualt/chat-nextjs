import styled from "styled-components";

export const ChatMessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;