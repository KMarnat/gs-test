import ChatSection from "../../components/ChatSection/ChatSection";
import Sidemenu from "../../components/Sidemenu/Sidemenu";

const ChatPage = () => {
  return (
    <main className="chatpage">
      <Sidemenu />
      <ChatSection />
    </main>
  );
};

export default ChatPage;
