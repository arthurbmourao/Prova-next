'use client'
import { BotaLinkProps } from "@/props/BotaoLinkProps";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BotaoLink({link, placeholder} : BotaLinkProps){

    const pathName = usePathname();
    const isAtivo = pathName === link

    return <Link
            className={` rounded-full px-3 py-2 ${isAtivo ? "bg-weg-light bg-blue-400 text-weg-dark" : "hover:bg-slate-100 "} `}
            href={link}
            >
            {placeholder}
            </Link>

}