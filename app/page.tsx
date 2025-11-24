import { redirect } from "next/navigation";

export default function Home() {
  redirect("/products");
  return (
    <div className="flex min-h-[calc(100vh-74px)] w-full">Page Content</div>
  );
}
