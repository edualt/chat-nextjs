import { RoomBox, RoomName, RoomContainer, RoomImg } from "./RoomStyles";

const Rooms = () => {
  return (
    <RoomContainer>
      <RoomBox onClick={() => (console.log("hola"))}>
        <RoomImg src="/images/icon.png" alt="Room" />
        <RoomName>Name</RoomName>
      </RoomBox>
      <RoomBox>
        <RoomImg src="/images/icon.png" alt="Room" />
        <RoomName>Name</RoomName>
      </RoomBox>
      <RoomBox>
        <RoomImg src="/images/icon.png" alt="Room" />
        <RoomName>Name</RoomName>
      </RoomBox>
    </RoomContainer>
  );
};

export default Rooms;
