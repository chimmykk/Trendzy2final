"use client"

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Sidebar() {
  const { status } = useSession();

  // Render the sidebar only when the session is authenticated
  if (status === "authenticated") {
    return (
      <div className=" fixed left-0 min-h-screen hidden lg:flex flex-col gap-6 py-4 w-fit h-[1000px] px-4 overflow-y-scroll ">
        <h1 className="text-xl font-bold">CATEGORIES</h1>
        <div className="text-base font-semibold flex flex-col">
          <Link href={"./"} className="bg-bgGray rounded-lg px-2 py-2 block w-44">
            <h1>Men's Fashion</h1>
          </Link>
          <Link href={"./"} className="hover:bg-bgGray rounded-lg px-2 py-2 block w-44">
            <h1>Arts & Handmade</h1>
          </Link>
          <Link href={"./"} className="hover:bg-bgGray rounded-lg px-2 py-2 block w-44">
            <h1>Women clothing</h1>
          </Link>
        </div>
      </div>
    );
  }

  // Return null if the session is not authenticated (sidebar won't be displayed)
  return null;
}
