
import { CardCursoProps } from "@/props/CardCursoProps";

export default function CursoDetalhes({card} : CardCursoProps){

    return(
        <CursoDetalhes card={{
            id: "",
            nome: "",
            descricao: "",
            categoria: "",
            preco: 0,
            imagem: "",
            vagas: 0,
            destaque: false,
            data: "",
            local: ""
        }}
        />
    );
}