import Header from "@/components/Header"
import { CardCursoProps } from "@/props/CardCursoProps"
import CursoDetalhes from "@/components/CursoDetalhes"

type ParamProps = Promise<{id:string}>
async function buscarDetalhes(id:string) : Promise<CardCursoProps> {
        const response = await fetch(`https://dynamic-events-api.onrender.com/api/eventos/${id}`)
        return response.json()
}
export default async function sobre({params} : {params : ParamProps}){

    const id = await params;
    const curso = await buscarDetalhes(id.id)
    
    return (
        <>
            <CursoDetalhes card={{
                id: curso.card.id,
                nome: curso.card.nome,
                descricao: curso.card.descricao,
                categoria: curso.card.categoria,
                preco: curso.card.preco,
                imagem: "",
                vagas: 0,
                destaque: false,
                data: "",
                local: ""
            }}            />

        </>
    )
}