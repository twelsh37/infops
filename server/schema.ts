// File: server/schema.ts
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  citations: text("citations")
    .notNull()
    .$type<Array<{ number: number; url: string }>>(),
});
