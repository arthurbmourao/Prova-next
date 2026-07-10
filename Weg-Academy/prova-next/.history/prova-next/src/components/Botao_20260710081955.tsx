'use client'
import { BotaoProps } from "@/props/BotaoProps";
import { use } from "react";

export default function Botao({bg, bgHover, corTexto, border, placeHolder, link} : BotaoProps){
    return(
        <a href="./sobre.html" class="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-weg-dark hover:{}">{placeHolder}</a>
    );
}