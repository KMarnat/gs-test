import ChatWindow from "../ChatWindow/ChatWindow";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SelectGpt from "../SelectGpt/SelectGpt";

const ChatSection = () => {
  return (
    <section className="chatsection">
      <Header />
      <SelectGpt />
      <ChatWindow />
      <Footer />
    </section>
  );
};

export default ChatSection;
