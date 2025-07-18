import { createAccessControl } from "better-auth/plugins/access";
import { defaultStatements, adminAc } from "better-auth/plugins/admin/access";
import { userRole } from "../lib/constants";

const statements = {
  ...defaultStatements,
  posts: ["create", "read", "update", "delete", "update:own", "delete:own"],
  users: ["create", "read", "update", "delete", "update:own", "delete:own", "manage:roles"],
} as const;

export const ac = createAccessControl(statements);

export const roles = {
  [userRole.USER]: ac.newRole({
    posts: ["create", "read", "update:own", "delete:own"],
  }),
  [userRole.ADMIN]: ac.newRole({
    ...adminAc.statements,
    posts: ["create", "read", "update", "delete", "update:own", "delete:own"],
  }),
  [userRole.SUPERADMIN]: ac.newRole({
    ...adminAc.statements,
    posts: ["create", "read", "update", "delete", "update:own", "delete:own"],
    users: ["create", "read", "update", "delete", "update:own", "delete:own", "manage:roles"],
  }),
};