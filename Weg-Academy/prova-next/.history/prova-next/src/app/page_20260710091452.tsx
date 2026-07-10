import Image from "next/image";
import Botao from "@/components/Botao";
import Header from "@/components/Header";
import CardCurso from "@/components/CardCurso";
import { CardCursoProps } from "@/props/CardCursoProps";

const API_URL = "https://dynamic-events-api.onrender.com/api/eventos"
export default async function Home() {
  
    
    const response = await fetch(API_URL)
    const eventos = await response.json()

   console.log(eventos)

    

    
  
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
                  corTexto={"black"} 
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
        <section className="mx-auto max-w-6xl px-4 py-14" id="cursos">
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">Catálogo</p>
        <h2 className="text-3xl font-extrabold tracking-tight text-weg-dark">Cursos disponíveis</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Os cards abaixo estão estáticos e mockados na base HTML. Na versão em Next.js,
          eles deverão ser renderizados a partir da API/JSON, exibindo apenas a categoria <strong>Cursos</strong>.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">

        
        {eventos.map((e : any) => (
            
            <CardCurso card={{
            id: e.id,
            nome: e.nome,
            descricao: e.descricao,
            categoria: e.categoria,
            preco: 0,
            imagem: "",
            vagas: 0,
            destaque: false,
            data: "",
            local: ""
          }}            />
        ))}
          

      </div>
    </section>
        
    </>
    
    
  );
}
