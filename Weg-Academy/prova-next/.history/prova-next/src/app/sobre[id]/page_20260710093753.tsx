import Header from "@/components/Header"
import { ParamProps } from "@/props/ParamProps"

export default function sobre(){

    type ParamProps = Promise<{id:string}>
    as
    return (
        <>
            <Header/>
            <p>funcionou</p>
        </>
    )
}