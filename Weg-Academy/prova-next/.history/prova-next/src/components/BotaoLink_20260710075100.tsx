
import { BotaLinkProps } from "@/props/BotaoLinkProps";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BotaoLink({link, placeholder} : BotaLinkProps){

    const pathName = usePathname();
    const isAtivo = pathName === link

    return <Link
            className={`${isAtivo} ? rounded-full bg-weg-light px-3 py-2 text-weg-dark : rounded-full px-3 py-2 hover:bg-slate-100`}
            href={link}
            >
            
            </Link>

}