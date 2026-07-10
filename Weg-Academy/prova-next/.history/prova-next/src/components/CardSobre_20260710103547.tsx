import { CardSobreProps } from "@/props/CardSobreProps"

export default function CardSobre({titulo, paragrafo1, paragrafo2} : CardSobreProps){

    return(
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold tracking-tight text-weg-dark">{Tecnologia aplicada à indústria}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              A WEG atua no desenvolvimento de soluções que contribuem para produtividade,
              eficiência energética, automação e modernização de processos industriais.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Suas áreas de atuação conectam engenharia, inovação, fabricação e serviços técnicos,
              criando um ambiente em que conhecimento e prática caminham juntos.
            </p>
        </article>
    )
}