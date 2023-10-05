import axios from "axios"
import { useState } from "react"

export default function HomePost() {
    const [nomeConta, setNomeConta] = useState([])
    const [comentarios, setComentarios] = useState([])

    function inserirPost(){
        if(nomeConta == "" && comentarios == ""){
            alert('preencha todos os campos')
            return
        }

        axios.post('http://localhost:22390/Comentarios', {
            nomeConta: nomeConta,
            comentarios: comentarios
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch((response) => {
            console.log(`Não foi possivel inserir ${response.data} na requisição!!!`)
        })
        
    }

    return (
        <>
            <h1>requsicao pos da minha tela de home</h1>

            <h3>Escreva o nome da conta</h3>
            <input value={nomeConta} onChange={(e) => setNomeConta(e.target.value)} placeholder="digite o nome da conta que deseja inserir"></input>

            <h3>Escreva o nome da conta</h3>
            <input value={comentarios} onChange={(e) => setComentarios(e.target.value)} placeholder="digite o comentario que deseja inserir"></input><br/> <br/>


            <button onClick={inserirPost}>Inserir Post</button>
        </>
    )
}