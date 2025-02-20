"use client";

import React, { useState } from "react";
import { SendHorizonalIcon } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  endOfMsgRef: React.RefObject<HTMLParagraphElement | null>;
};

const SendMessage = ({ endOfMsgRef }: Props) => {
  const [msg, setMsg] = useState<string>();
  return (
    <>
      <form>
        <footer className="border-light flex max-h-20 min-h-[5rem] items-center space-x-2 border-t bg-white px-4">
          <div className="flex-1">
            <textarea
              onChange={(e) => setMsg(e.currentTarget.value)}
              className="text-medium scrollbar-hide h-12 w-full bg-transparent py-3 outline-none"
              placeholder="Type a message..."
              value={msg}
            ></textarea>
          </div>

          <Button type={"button"} size={"icon"} className="rounded-full">
            <SendHorizonalIcon size={14} />
          </Button>
        </footer>
      </form>
    </>
  );
};

export default SendMessage;
