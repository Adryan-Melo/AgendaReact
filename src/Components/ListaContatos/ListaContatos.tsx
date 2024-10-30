import { useSelector } from 'react-redux'
import React from 'react'
import * as S from './ListaStyle'
import {RootReducer} from '../../../Store'
import Contato from '../Contatos/Contatos'

const ListaContatos = () =>{
const {itens} = useSelector((state: RootReducer) => state.agenda)

return (
    <S.Container>
    <S.Titulo>Lista de Contatos </S.Titulo>
    <S.Listul>

        {itens.map((a) => ( 
            <li key={a.nome}>
                <Contato  nome={a.nome} tag={a.tag} tel={a.tel} email={a.email} id={a.id} />
            </li>
        ))}

    </S.Listul>
    </S.Container>
)

}

export default ListaContatos