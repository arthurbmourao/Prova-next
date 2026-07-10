'use client'
import { BotaoProps } from "@/props/BotaoProps";
import Link from "next/link";
import { use } from "react";

export default function Botao({bg, bgHover, corTexto, border, placeHolder, link} : BotaoProps){
    return(
        <>
        </>
        <a href="./sobre.html" class="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-weg-dark hover:bg-slate-50">{placeHolder}</a>

        <Link
            href={link}
        >
        
        </Link>
    );
}