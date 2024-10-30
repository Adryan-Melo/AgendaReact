import styled from "styled-components";

type TagProps = {
    Tag?: string
}

function MudaDeCor (props: TagProps): string {
    if ('Tag' in props) {
        if (props.Tag === 'Trabalho') return '#ff4400ce'
        if (props.Tag === 'Família') return '#22d874'
        if (props.Tag === 'Amigos') return '#4439d8'
        if (props.Tag === 'Favoritos') return '#fdd804'
        return '#4e0000';
    }

    else {
        return '#4e0000'
    }
}

export const Titulo = styled.h1`
color: #ff0000;
`

export const Nome = styled.input`
margin-top: 8px;
display: flex;
font-weight: Bold;
font-size: 18px;
color: black;
border: none;
background-color: transparent;
    &:focus {
        outline: 1px solid #007bff9d ;
        outline-style:line;
        border-radius: 4px;
    }

`
export const Email = styled.input`
margin-bottom: 8px;
display: flex;
font-weight: Bold;
font-size: 18px;
color: black;
border: none;
background-color: transparent;
&:focus {
    outline: 1px solid #007bff9d ;
    outline-style:line;
    border-radius: 4px;
    }
`
export const Numb = styled.input`
display: flex;
font-weight: Bold;
font-size: 18px;
color: black;
border: none;
background-color: transparent;
&:focus {
        outline: 1px solid #007bff9d ;
        outline-style:line;
        border-radius: 4px;
    }
    
`

export const Card = styled.div`
    background-color: #F8F8FF;
    margin-top: 10px;
    margin-bottom: 32px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 8px;
    display: block;
`

export const TituloH3 = styled.h3`
    font-size: 18px;
    font-weight: bold;

`

export const Tag = styled.span<TagProps>`
    padding: 4px 8px;
    font-size: 10px;
    color: #fff;
    font-weight: bold;
    background-color: ${(props) => MudaDeCor(props)};
    border-radius: 8px;
`

export const Barra = styled.div`
    border-top: 2px solid lightgrey;
    
`
export const Botao = styled.button`
    font-weight: bold;
    font-size: 12px;
    color: #fff;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    background-color: #4169E1;
    border-radius: 8px;
    margin-right: 8px;
    margin-top: 8px;

`

export const BotaoSalvar = styled(Botao)`
    background-color: #32CD32;
`
export const BotaoDel= styled(Botao)`
    background-color: #FF0000;
`
export const BotaoCancelar= styled(Botao)`
    background-color: #FFA500;
`