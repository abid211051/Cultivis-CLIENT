import { isvalid } from "@/app/api/auth/sessionCheck";

export default async function Page() {
  await isvalid();
  return (
    <>
      <div>this is news Page</div>
    </>
  );
}
