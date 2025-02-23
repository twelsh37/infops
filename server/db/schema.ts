import { pgTable, serial, text, json } from "drizzle-orm/pg-core";

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  citations: json("citations"),
});

export type Article = typeof articles.$inferSelect;
