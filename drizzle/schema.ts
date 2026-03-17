import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// TODO: Add your tables here

export const medicalReports = mysqlTable("medicalReports", {
  id: int("id").autoincrement().primaryKey(),
  referenceId: varchar("referenceId", { length: 32 }).notNull().unique(),
  patientName: text("patientName").notNull(),
  country: text("country").notNull(),
  medicalCondition: text("medicalCondition").notNull(),
  fileKeys: text("fileKeys").notNull(), // JSON array of S3 keys
  fileUrls: text("fileUrls").notNull(), // JSON array of public URLs
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type MedicalReport = typeof medicalReports.$inferSelect;
export type InsertMedicalReport = typeof medicalReports.$inferInsert;

export const referringDoctors = mysqlTable("referringDoctors", {
  id: int("id").autoincrement().primaryKey(),
  referenceId: varchar("referenceId", { length: 32 }).notNull().unique(),
  doctorName: text("doctorName").notNull(),
  clinicOrHospital: text("clinicOrHospital").notNull(),
  country: text("country").notNull(),
  patientCondition: text("patientCondition").notNull(),
  fileKeys: text("fileKeys").notNull(), // JSON array of S3 keys
  fileUrls: text("fileUrls").notNull(), // JSON array of public URLs
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ReferringDoctor = typeof referringDoctors.$inferSelect;
export type InsertReferringDoctor = typeof referringDoctors.$inferInsert;