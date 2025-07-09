import {
  DeleteUsersButton,
  PlaceholderDeleteUsersButton,
} from "@/components/custom/delete-users-button";
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

export default async function AdminUsersPage() {
  const headerList = await headers();
  const session = await auth.api.getSession({
    headers: headerList,
  });

  if (!session) redirect("/login");
  if (session.user?.role !== "ADMIN") redirect("/dashboard");

  // Fetch all users from database
  const { users } = await auth.api.listUsers({
    headers: headerList,
    query: {
      sortBy: "name",
    },
  });

  const sortedUsers = users.sort((a, b) => {
    if (a.role === "ADMIN" && b.role !== "ADMIN") {
      return -1;
    }
    if (a.role !== "ADMIN" && b.role === "ADMIN") {
      return 1;
    }
    return 0;
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
          {sortedUsers.map((userData) => (
            <TableRow key={userData.id}>
              <TableCell>
                <div className="text-sm text-muted-foreground">
                  {userData.id.slice(0, 8)}
                </div>
              </TableCell>
              <TableCell>{userData.name}</TableCell>
              <TableCell>{userData.email}</TableCell>
              <TableCell>{userData.role}</TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {formatDate(userData.createdAt)}
              </TableCell>
              <TableCell>
                {userData.role === "ADMIN" ? (
                  <PlaceholderDeleteUsersButton />
                ) : (
                  <DeleteUsersButton userId={userData.id} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
