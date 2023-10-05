import axios from "axios"
import { useState } from "react"

export default function HomeDelete() {
    const [ID, setID] = useState(0)

    function deletarPost() {
        axios.delete('http://localhost:22390/Comentarios/' + ID)
            .then(() => {
                alert(`id numero ${ID} excluido com sucesso!!!`)
                console.log(`id numero ${ID} excluido com sucesso!!!`)
            })
            .catch(() => {
                console.log(`Não foi possivel deletar o id numero: ${ID}`)
                alert(`Não foi possivel deletar o id numero: ${ID}`)
            })
    }



    return (
        <>
            <h1>tela de delete</h1>
            <h3>Digite o id</h3>
            <input onChange={(e) => setID(e.target.value)} value={ID} type="number" placeholder="digite o id que voce deseja excluir"></input>
            <button onClick={deletarPost}>Deletar post</button>
        </>
    )
}