"use server";

import { apiRoutes } from "@/lib/routes";
import { getApi, postApi } from "./api.action";
import { Chat, Roles } from "@/types/chat.type";

export async function getChats(threadId: string) {
  const response = await getApi<Chat[]>(
    apiRoutes.server.chat.getChats(threadId),
  );
  return response;
}

export async function saveChat(threadId: string, content: string, role: Roles) {
  const response = await postApi<Chat>(apiRoutes.server.chat.saveChat, {
    threadId,
    content,
    role,
  });
  return response;
}