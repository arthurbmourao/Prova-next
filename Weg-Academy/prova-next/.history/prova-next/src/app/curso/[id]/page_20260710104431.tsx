
import { CardCursoProps } from "@/props/CardCursoProps";

export default function CursoDetalhes({card} : CardCursoProps){

    return(
        <CursoDetalhes card={{
            id: card.id,
            nome: card.nome,
            descricao: card.descricao,
            categoria: card.categoria,
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