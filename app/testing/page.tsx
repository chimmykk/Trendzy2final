"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Test({children}: {children: ReactNode}){

    const pathname = usePathname()

    return(
        <div className="">
            <div className="flex justify-center items-center gap-24">
                <Link href={'/testing/page1'} className={`${pathname === '/testing/page1' ? ' text-red-500' : ' text-gray-700' }`}>page 1</Link>
                <Link href={'/testing/page2'}>page 2</Link>
                <Link href={'/testing/page3'}>page 3</Link>
            </div>
            {children}
        </div>
    )
}