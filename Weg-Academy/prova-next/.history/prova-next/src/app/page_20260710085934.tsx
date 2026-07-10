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
        
    </>
    
    
  );
}
