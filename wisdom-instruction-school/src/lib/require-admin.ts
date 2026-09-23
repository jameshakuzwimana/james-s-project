import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";

/**
 * Server-component guard for admin pages. Redirects to /login when the user is
 * not signed in with an admin role (ADMIN or STAFF).
 */
export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) {
    redirect("/login");
  }
  return session;
}