//o que fica dentro do () sao chamados de parametros de uma funcao
//neste caso colocamos um unico paramentro que sao props e dentro dessa props ira receber um objeto, onde tera o author e o content
//ex.: porps: {author: "", content:"" }
//no react para mostrarmos o valor de um variavel dentro de um html, precisamos colocar dentro de {}, ex: {props.content}
export function Post(props) {
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}

