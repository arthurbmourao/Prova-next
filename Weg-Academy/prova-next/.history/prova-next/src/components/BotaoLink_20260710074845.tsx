
import { BotaLinkProps } from "@/props/BotaoLinkProps";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BotaoLink({link, placeholder} : BotaLinkProps){

    const pathName = usePathname();
    const isAtivo = pathName === link

    return <Link
            href={link}
            >
            
            </Link>

}