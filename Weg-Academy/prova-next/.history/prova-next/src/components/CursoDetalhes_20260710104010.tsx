import { CardCursoProps } from "@/props/CardCursoProps";
import Link from "next/link";


export default function CursoDetalhes ({card} : CardCursoProps){
    return(

        <section class="border-b border-slate-200 bg-slate-50">
        <div class="mx-auto max-w-6xl px-4 py-12">
        <a href="./index.html" class="text-sm font-extrabold text-weg-blue hover:text-weg-dark">← Voltar para cursos</a>
        
        <div className="mt-8 grid gap-8 md:grid-cols-[1.35fr_0.65fr]">
          <div>
            {card.destaque ? "<p className=mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue>Curso em destaque</p>" : ""}
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-weg-dark md:text-6xl">{card.nome}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              {card.descricao}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
              <span className="rounded-full bg-white px-3 py-1">Categoria: Cursos</span>
              <span className="rounded-full bg-white px-3 py-1">{card.data}</span>
              <span className="rounded-full bg-white px-3 py-1">{card.vagas} vagas disponíveis</span>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-weg-dark">Informações do curso</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600"><strong>Local:</strong> ${card.local}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600"><strong>Identificador:</strong> ${card.id}</p>
            <p className="mt-5 text-3xl font-extrabold tracking-tight text-weg-dark">R$ ${card.preco}</p>

            <Link
                className="mt-6 inline-flex rounded-full bg-weg-blue px-5 py-3 text-sm font-bold text-white hover:bg-weg-dark"
                href={"/"}
            >
                Tenho interesse
            </Link>
          </aside>
        </div>
        </div>
    
    )
}