import Image from "next/image";
import Botao from "@/components/Botao";
import Header from "@/components/Header";

const API_URL = "https://dynamic-events-api.onrender.com/api/eventos"
export default function Home() {

  async function carregarCursos() {
    
    const response = await fetch(API_URL)
    const eventos = await response.json()

    const cursos = eventos.filter((e) =>{
      return e.categoria === 'Curso'
    })

    return cursos
  }

  return (
    <>
      <Header/>
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">Plataforma de cursos técnicos</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-weg-dark md:text-6xl">
                Aprendizagem para quem transforma tecnologia em indústria
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                A WEG Academy reúne cursos e formações voltados para automação, acionamentos,
                eficiência energética, eletricidade industrial e soluções aplicadas ao mundo do trabalho.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Botao
                  bg={"blue-[#00579D]"}
                  bgHover={"bg-blue-700"} 
                  border={""}
                  corTexto={"white"} 
                  placeHolder={"Explorar Cursos"}
                  link={"/"}/>
                
                <Botao
                  bg={"white"}
                  bgHover={"bg-slate-50"} 
                  border={"border border-slate-300"}
                  corTexto={"blue-800"} 
                  placeHolder={"Conhecer a WEG"}
                  link={"/sobre"}/>
              </div>
            </div>
          </div>
        </section>
        <main>
          <section class="border-b border-slate-200 bg-slate-50">
            <div class="mx-auto max-w-6xl px-4 py-16">
              <div class="max-w-3xl">
                <p class="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">Plataforma de cursos técnicos</p>
                <h1 class="text-4xl font-extrabold tracking-tight text-weg-dark md:text-6xl">
                  Aprendizagem para quem transforma tecnologia em indústria
                </h1>
                <p class="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                  A WEG Academy reúne cursos e formações voltados para automação, acionamentos,
                  eficiência energética, eletricidade industrial e soluções aplicadas ao mundo do trabalho.
                </p>
                <div class="mt-8 flex flex-wrap gap-3">
                  <a href="#cursos" class="rounded-full bg-weg-blue px-5 py-3 text-sm font-bold text-white hover:bg-weg-dark">Explorar cursos</a>
                  <a href="./sobre.html" class="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-weg-dark hover:bg-slate-50">Conhecer a WEG</a>
                </div>
              </div>
            </div>
          </section>

          <section class="mx-auto max-w-6xl px-4 py-14" id="cursos">
            <div class="mb-8 max-w-2xl">
              <p class="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">Catálogo</p>
              <h2 class="text-3xl font-extrabold tracking-tight text-weg-dark">Cursos disponíveis</h2>
              <p class="mt-3 text-sm leading-6 text-slate-600">
                Os cards abaixo estão estáticos e mockados na base HTML. Na versão em Next.js,
                eles deverão ser renderizados a partir da API/JSON, exibindo apenas a categoria <strong>Cursos</strong>.
              </p>
            </div>

            <div class="grid gap-5 md:grid-cols-3">
              <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <img src="./assets/img/placeholder-curso.jpg" alt="Imagem placeholder do curso Formação em Acionamentos WEG CFW" class="h-44 w-full object-cover">
                <div class="p-5">
                  <span class="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-emerald-700">Destaque</span>
                  <h3 class="mt-4 text-xl font-bold leading-tight text-weg-dark">Formação em Acionamentos WEG CFW</h3>
                  <p class="mt-3 text-sm leading-6 text-slate-600">Curso completo de 40h sobre a linha de inversores de frequência CFW: parametrização, programação ladder, comunicação industrial e manutenção preventiva.</p>

                  <div class="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                    <span class="rounded-full bg-slate-100 px-3 py-1">R$ 1.890,00</span>
                    <span class="rounded-full bg-slate-100 px-3 py-1">13/04/2026 às 08:00</span>
                    <span class="rounded-full bg-slate-100 px-3 py-1">24 vagas</span>
                  </div>

                  <p class="mt-4 text-sm text-slate-500">Centro de Treinamento WEG, Jaraguá do Sul, SC</p>
                  <a href="./curso.html" class="mt-5 inline-flex text-sm font-extrabold text-weg-blue hover:text-weg-dark">Ver detalhes</a>
                </div>
              </article>

              

              
            </div>
          </section>
        </main>
    </>
    
    
  );
}
