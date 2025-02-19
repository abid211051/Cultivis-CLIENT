import { auth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export async function isvalid() {
  const session = await auth();
  if (!session) {
    return redirect("/signin");
  }
  return session;
}
