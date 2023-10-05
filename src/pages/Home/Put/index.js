import { useState } from "react"
import axios from "axios"

export default function HomePut() {

    const [nomeConta, setNomeConta] = useState([])
    const [comentarios, setComentarios] = useState([])
    const [ID, setID] = useState(0)

    function atualizarPost() {
        if (nomeConta == "" && comentarios == "") {
            alert('preencha todos os campos')
            return
        }

        axios.put(`http://localhost:22390/Comentarios/` + ID, {
            nomeConta: nomeConta,
            comentarios: comentarios
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch((response) => {
                console.log(`Não foi possivel atualizar ${response.data} na requisição!!!`)
            })

    }


    return (
        <>
            <h1>atualizacao da minha tela de home</h1>

            <h3>Digite o id</h3>
            <input onChange={(e) => setID(e.target.value)} value={ID} type="number" placeholder="digite o id que voce deseja atualizar"></input>

            <h3>Escreva o nome da conta</h3>
            <input value={nomeConta} onChange={(e) => setNomeConta(e.target.value)} placeholder="digite o nome da conta que deseja atualizar"></input>

            <h3>Escreva o comentario</h3>
            <input value={comentarios} onChange={(e) => setComentarios(e.target.value)} placeholder="digite o comentario que deseja atualizar"></input><br /> <br />


            <button onClick={atualizarPost}>atualizar Post</button>
        </>
    )
}