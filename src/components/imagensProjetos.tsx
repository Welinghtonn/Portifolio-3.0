import imagemProjeto1 from "@/assets/To-do.png"
import imagemProjeto2 from "@/assets/apiValorant.png"
import imagemProjeto3 from "@/assets/galeria.png"

interface ImagensProps {
    imagem: number
    nomes: number
}

const nomesArray = ["To-do-List", "Api Valorant", "Galeria"]
const imagensArray = [imagemProjeto1, imagemProjeto2, imagemProjeto3]

export const ImagensProjetos = ({ imagem, nomes }: ImagensProps) => {
    const imagemSelecionada = imagensArray[imagem]
    const nomesSelecionados = nomesArray[nomes]

    return (
        <>
            <div className="containerImagensProjetos">
                <p>{nomesSelecionados}</p>
                <img className="imgProjeto" src={imagemSelecionada} alt="" />
            </div>
        </>
    )
}
