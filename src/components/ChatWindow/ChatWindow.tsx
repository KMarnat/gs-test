import ArrowDownIcon from "../../assets/arrow-down.svg?react";

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <div className="chat-window__plugins">
        <p>No plugins enabled</p>
        <ArrowDownIcon />
      </div>
      <div className="chat-window__content"></div>
      <div className="chat-window__post">
        <input type="text" name="message" placeholder="Send a message" />
        <button>Submit</button>
      </div>
      <p className="chat-window__info">
        Free Research Preview. ChatGPT may produce inaccurate information about people, places, or
        facts. <span>ChatGPT May 12 Version</span>
      </p>
    </div>
  );
};

export default ChatWindow;
