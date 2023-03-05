import styled from "styled-components";

// align to end
export const MessageBox = styled.div<{owner:string}>`
    background-color: ${props => props.owner === "me" ? "#2A2B30" : "#151215"};
    max-width: 60%;
    align-self: ${props => props.owner === "me" ? "flex-end" : "flex-start"};
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
`;

export const MessageSender = styled.div`
    font-style: italic;
    color: #a0a0a0;
    margin-bottom: 5px;
`;