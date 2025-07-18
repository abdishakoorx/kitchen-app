import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins/admin";
import { db } from "@/db";
import { schema } from "@/db/Schema";
import { ac, roles } from "./permissions";
import { userRole } from "@/lib/constants";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          const SUPERADMIN_EMAILS =
            process.env.SUPERADMIN_EMAILS?.split(",") ?? [];
          const ADMIN_EMAILS = process.env.ADMIN_EMAILS?.split(",") ?? [];

          if (SUPERADMIN_EMAILS?.includes(user.email)) {
            return { data: { ...user, role: userRole.SUPERADMIN } };
          }
          if (ADMIN_EMAILS?.includes(user.email)) {
            return { data: { ...user, role: userRole.ADMIN } };
          }
          return { data: user };
        },
      },
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        input: false,
      },
    },
  },
  plugins: [
    nextCookies(),
    admin({
      defaultRole: userRole.USER,
      adminRoles: [userRole.ADMIN, userRole.SUPERADMIN],
      ac,
      roles,
    }),
  ],
});
