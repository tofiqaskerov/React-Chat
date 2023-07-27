// import  { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced"
import { PrettyChatWindow } from "react-chat-engine-pretty";
const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="0de1d2d5-f7be-46f6-a479-77a23b9aee54"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
      
    </div>
  );
};

export default ChatsPage;
