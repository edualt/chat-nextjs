import styled from "styled-components";

export const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #151215;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RoomBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #151215;
  border-bottom: 1px solid #232023;

  &:hover {
      background-color: #282729;
  }
`;

export const RoomName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  color: white;
`;

// as a circle
export const RoomImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 50%;
`;