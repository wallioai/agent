import { Message } from "ai";

export type Roles = "user" | "assistant" | "system" | "tool" | "function";
export type Chat = Message & {
  id: string;
  content: string;
  role: Roles;
  threadId: string;
  updatedAt: string;
  createdAt: string;
};
