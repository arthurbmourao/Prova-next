import { CardSobreProps } from "@/props/CardSobreProps"

export default function CardSobre({titulo, paragrafo1, paragrafo2} : CardSobreProps){

    return(
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold tracking-tight text-weg-dark">{titulo}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              {paragrafo1}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {paragra}
            </p>
        </article>
    )
}