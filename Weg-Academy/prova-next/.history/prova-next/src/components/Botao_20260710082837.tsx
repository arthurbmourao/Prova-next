'use client'
import { BotaoProps } from "@/props/BotaoProps";
import Link from "next/link";
import { use } from "react";

export default function Botao({bg, bgHover, corTexto, border, placeHolder, link} : BotaoProps){
    return(
        <>
        
        <Link
            href={link}
            className={`rounded-full ${bg}  ${border} bg-white px-5 py-3 text-sm font-bold text-${corTexto} hover:${bgHover}`}
        >
            {placeHolder}
        </Link>

        </>
    );
}