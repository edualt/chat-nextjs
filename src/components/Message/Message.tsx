import { MessageBox, MessageSender } from "./MessageStyles";

const Message = () => {
  return (
    <>
      <MessageBox>
        <MessageSender>
          <p>Sender</p>
        </MessageSender>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      </MessageBox>
    </>
  );
};

export default Message;
