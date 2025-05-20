// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { float } from "drizzle-orm/mysql-core";
import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
  serial,
  decimal
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `naurzie_${name}`);

export const images = createTable(
  "image",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }) .notNull(),
    url: varchar("url", {length: 1024}) .notNull(),

    userId: varchar ("userId", {length: 256}).notNull(),

    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);



export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 256 }).notNull(), 
    author: varchar("author", { length: 256 }).notNull(), 
    status: varchar("status", { length: 256 }).notNull(), 
    rating: decimal("rating", {precision:100}).notNull(),
    description: varchar("description", { length: 1024 }).notNull(), 
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (posts) => ({
    titleIndex: index("title_idx").on(posts.title), 
  })
);

