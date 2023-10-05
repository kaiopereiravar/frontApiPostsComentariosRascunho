import axios from 'axios'
import { useState, useEffect } from "react"
import '../GetImg/GetImg.css'


export default function HomeImg() {

    const [resposta, SetResposta] = useState([])
    const [imgId, setImgId] = useState(0)
    const [img, setImg] = useState([])


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

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (img.length === 0) {
            alert('Selecione pelo menos uma foto para fazer o upload.');
            return;
        }

        const formData = new FormData();

        for (let i = 0; i < img.length; i++) {
            formData.append('files', img[i]);
        }

        try {
            const response = await axios.post('http://localhost:22390/Comentarios/Inserirfoto/' + imgId, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Foto enviada com sucesso!');
        } catch (error) {
            alert('Erro ao enviar a foto.');
        }
    };

    return (
        <>
            <h3>Posts disponiveis</h3> <br /> <br />
            {resposta.map((resposta) => {
                return (
                    <article className='div-imagem' key={resposta.id}>
                        <h1>{resposta.id}</h1>
                        <img src={'http://localhost/images/' + resposta.foto} />
                    </article>
                )
            })}

            <h3>Digite o id que voce deseja inserir a imagem</h3>
            <form onSubmit={handleFormSubmit}>
                <input onChange={(e) => setImgId(e.target.value)} value={imgId} type="number" placeholder="digite o id que voce deseja inserir a imagem" />

                <h3>Escolha o arquivo da imagem</h3>
                <input type='file' onChange={(e) => setImg(e.target.files)} accept="image/*" multiple placeholder="escolha o arquivo de imagem" /> <br /> <br />

                <button type='submit'>Inserirfoto</button>
            </form>
        </>
    )
}