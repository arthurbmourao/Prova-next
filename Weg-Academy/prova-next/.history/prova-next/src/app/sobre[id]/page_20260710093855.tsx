import Header from "@/components/Header"
import { CardCursoProps } from "@/props/CardCursoProps"
import { ParamProps } from "@/props/ParamProps"

export default function sobre(){

    type ParamProps = Promise<{id:string}>
    async function buscarDetalhes(id:string)  {
        const id = await 
    }
    return (
        <>
            <Header/>
            <p>funcionou</p>
        </>
    )
}