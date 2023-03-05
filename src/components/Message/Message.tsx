import { MessageBox, MessageSender } from "./MessageStyles";
import { FaFileDownload } from "react-icons/fa";

interface Props {
  username: string;
  message: string;
  file?: ArrayBuffer;
  owner: string;
  type?: string;
}

const Message = ({ username, message, file, owner, type }: Props) => {
  const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  return (
    <>
      <MessageBox owner={owner}>
        <MessageSender>
          <p>{username}</p>
        </MessageSender>
        <p>{message}</p>
        {file &&
          (type === "image" ? (
            <img
              width={200}
              style={{ borderRadius: "3px" }}
              src={`data:image/png;base64,${arrayBufferToBase64(file)}`}
              alt=""
            />
          ) : (
            <>
              <FaFileDownload
                href={`data:application/pdf;base64,${arrayBufferToBase64(
                  file
                )}`}
                onClick={(e) => {
                  e.preventDefault();

                  const link = document.createElement("a");
                  link.href = `data:application/pdf;base64,${arrayBufferToBase64(
                    file
                  )}`;
                  link.download = "file.pdf";
                  link.click();
                }}
                size={30}
                color="gray"
                cursor={"pointer"}
              />
            </>
          ))}
      </MessageBox>
    </>
  );
};

export default Message;
