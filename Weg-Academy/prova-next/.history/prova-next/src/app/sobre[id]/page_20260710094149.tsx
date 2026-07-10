import Header from "@/components/Header"
import { CardCursoProps } from "@/props/CardCursoProps"
import { ParamProps } from "@/props/ParamProps"

async function buscarDetalhes(id:string)  {
        const response = await fetch(`https://dynamic-events-api.onrender.com/api/eventos/${id}`)
        return response.json()
    }
export default function sobre(){

    type ParamProps = Promise<{id:string}>
    
    return (
        <>
            
            <p>funcionou</p>
        </>
    )
}