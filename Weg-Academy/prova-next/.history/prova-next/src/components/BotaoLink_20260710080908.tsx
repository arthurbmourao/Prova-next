'use client'
import { BotaLinkProps } from "@/props/BotaoLinkProps";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BotaoLink({link, placeholder} : BotaLinkProps){

    const pathName = usePathname();
    const isAtivo = pathName === link

    //theme não funciona
    return <Link
            className={` rounded-full px-3 py-2 ${isAtivo ? "bg-weg-light  text-weg-dark bg-weg-light" : "hover:bg-slate-100 "} `}
            href={link}
            >
            {placeholder}
            </Link>

}