import axios from 'axios'
import { useState, useEffect } from "react"


export default function Home() {
    const [resposta, SetResposta] = useState([])

    useEffect(() => {
        axios.get('http://localhost:22390/Comentarios')
            .then((resposta) => {
                SetResposta(resposta.data)
                console.log(resposta.data)
            })
            .catch(() => {
                alert('a requisicao nao pode ser feita')
            })
    }, [])




    return (
        <>
            <h1>Comentarios</h1>
            <h3>esta é a pagina de comentarios da minha api</h3> <br/> <br/>
            {resposta.map((resposta) => {
                return (
                    <article key={resposta.id}>
                        <h1>{resposta.nomeConta}</h1>
                        <p>{resposta.comentarios}</p>
                        <img src={'http://192.168.0.113/images/'+resposta.foto}/>
                    </article>
                )
            })}
        </>
    )
}