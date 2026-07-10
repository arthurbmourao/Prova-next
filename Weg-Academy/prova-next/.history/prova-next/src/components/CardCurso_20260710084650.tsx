
import { CardCursoProps } from "@/props/CardCursoProps";
import Image from "next/image";

export default function CardCurso({card} : CardCursoProps){
    return (
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image
            className="h-44 w-full object-cover"
            src={"/placeholder"}
            alt={`Imagem placeholder do curso Formação em ${card.nome}`} 
          />
          <div className="p-5">
            <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-emerald-700">Destaque</span>
            <h3 className="mt-4 text-xl font-bold leading-tight text-weg-dark">{card.nome}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{card.descricao}</p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-1">R$ {card.preco}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">{card.}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">24 vagas</span>
            </div>

            <p className="mt-4 text-sm text-slate-500">Centro de Treinamento WEG, Jaraguá do Sul, SC</p>
            <a href="./curso.html" className="mt-5 inline-flex text-sm font-extrabold text-weg-blue hover:text-weg-dark">Ver detalhes</a>
          </div>
        </article>
    );

}