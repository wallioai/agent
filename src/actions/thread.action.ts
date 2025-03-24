"use server";

import { apiRoutes } from "@/lib/routes";
import { getApi, postApi, updateApi, deleteApi } from "./api.action";
import { Thread } from "@/types/thread.type";
import { createSession } from "@/lib/session";
import { CookieKeys } from "@/enums/cookie.enum";

export async function getThreads() {
  return await getApi<Thread[]>(apiRoutes.server.thread.list);
}

export async function createThread(threadId: string, title?: string) {
  const thread = await postApi<Thread>(apiRoutes.server.thread.create, {
    title,
    threadId,
  });
  await createSession(threadId, CookieKeys.ACTIVE_CHAT);
  return thread;
}

export async function updateThreadTitle(title: string, id: string) {
  return await updateApi<Thread>(apiRoutes.server.thread.update(id), {
    title,
  });
}

export async function deleteThread(id: string) {
  return await deleteApi<Thread>(apiRoutes.server.thread.delete(id));
}
