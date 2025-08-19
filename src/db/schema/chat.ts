// src/db/schema/chat.ts
import { pgTable, text, timestamp, jsonb, index } from "drizzle-orm/pg-core";

export const conversations = pgTable("conversations", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  title: text("title").default("New chat"),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
}, (t) => ({
  userIdx: index("conversations_user_idx").on(t.userId),
  createdIdx: index("conversations_created_idx").on(t.createdAt),
}));

export const messages = pgTable("messages", {
  id: text("id").primaryKey(),
  conversationId: text("conversationId").notNull(),
  role: text("role").notNull(),
  content: jsonb("content").notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
}, (t) => ({
  convIdx: index("messages_conversation_idx").on(t.conversationId),
  createdIdx: index("messages_created_idx").on(t.createdAt),
}));
