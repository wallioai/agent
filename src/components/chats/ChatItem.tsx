import { type Message } from "ai";
import ChatBubble from "./ChatBubble";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  messages: Message[];
  aiImage: string | StaticImport;
};

const ChatItem = ({ messages, aiImage }: Props) => {
  return (
    <div className="flex w-full flex-col">
      {messages?.map((m, i) => {
        if (m.role === "system") {
          <div key={m.id}>System</div>;
        }

        return <ChatBubble key={m.id} message={m} aiImage={aiImage} />;
      })}
    </div>
  );
};

export default ChatItem;
