import {
  DeleteUsersButton,
  PlaceholderDeleteUsersButton,
} from "@/components/custom/delete-users-button";
import { RoleSelect } from "@/components/custom/role-select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { auth } from "@/utils/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { canDeleteUser, canUpdateRole } from "@/utils/role-utils";
import { type UserRole } from "@/lib/constants";

export default async function AdminUsersPage() {
  const headerList = await headers();
  const session = await auth.api.getSession({
    headers: headerList,
  });

  if (!session) redirect("/login");

  // Allow both ADMIN and SUPERADMIN to access this page
  if (session.user?.role === "USER") {
    redirect("/dashboard");
  }

  // Fetch all users from database
  const { users } = await auth.api.listUsers({
    headers: headerList,
    query: {
      sortBy: "name",
    },
  });

  // Sort users by role hierarchy: SUPERADMIN -> ADMIN -> USER
  const sortedUsers = users.sort((a, b) => {
    const roleOrder = { SUPERADMIN: 0, ADMIN: 1, USER: 2 };
    const aOrder = roleOrder[a.role as keyof typeof roleOrder] ?? 3;
    const bOrder = roleOrder[b.role as keyof typeof roleOrder] ?? 3;
    return aOrder - bOrder;
  });

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const currentUserRole = session.user.role as UserRole;

  // Helper function to get available roles based on current user's role
  const getAvailableRoles = (currentUserRole: UserRole): UserRole[] => {
    if (currentUserRole === "SUPERADMIN") {
      return ["USER", "ADMIN", "SUPERADMIN"];
    } else if (currentUserRole === "ADMIN") {
      return ["USER", "ADMIN"];
    }
    return [];
  };

  return (
    <div className="container mx-auto py-4">
      <Table>
        <TableCaption>A list of all registered users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-base">ID</TableHead>
            <TableHead className="font-semibold text-base">Name</TableHead>
            <TableHead className="font-semibold text-base">Email</TableHead>
            <TableHead className="font-semibold text-base">Role</TableHead>
            <TableHead className="font-semibold text-base">
              Created At
            </TableHead>
            <TableHead className="font-semibold text-base">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers.map((userData) => {
            // Ensure userData.role is properly typed
            const userDataRole = userData.role as UserRole;

            const canDelete = canDeleteUser(currentUserRole, userDataRole);
            const canUpdate = canUpdateRole(currentUserRole);
            const isCurrentUser = userData.id === session.user.id;

            return (
              <TableRow key={userData.id}>
                <TableCell>
                  <div className="text-sm text-muted-foreground">
                    {userData.id.slice(0, 8)}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {userData.name}
                    {isCurrentUser && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        You
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell>{userData.email}</TableCell>
                <TableCell>
                  <RoleSelect
                    userId={userData.id}
                    userName={userData.name}
                    currentRole={userDataRole}
                    canUpdateRole={canUpdate && !isCurrentUser}
                    availableRoles={getAvailableRoles(currentUserRole)}
                  />
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {formatDate(userData.createdAt)}
                </TableCell>
                <TableCell>
                  {isCurrentUser ? (
                    <span className="text-xs text-muted-foreground">
                      Cannot delete self
                    </span>
                  ) : canDelete ? (
                    <DeleteUsersButton
                      userId={userData.id}
                      userName={userData.name}
                    />
                  ) : (
                    <PlaceholderDeleteUsersButton />
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
