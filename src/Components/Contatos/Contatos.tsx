import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './ContatoStyle';
import { remover, editar } from '../../../Store/Reducers/AgendaR';
import Agenda from '../../Models/ModelAgenda';

type Props = Agenda;
const Contato = ({ tag: tagOriginal, nome: nomeOriginal, tel: telOriginal, email: emailOriginal, id }: Props) => {
    const [estadoEditando, setEstaEditando] = useState(false);
    const [tag, setTag] = useState(tagOriginal); 
    const [nome, setNome] = useState(nomeOriginal);
    const [tel, setTel] = useState(telOriginal);
    const [email, setEmail] = useState(emailOriginal);
    const dispatch = useDispatch();

    const salvar = () => {
        dispatch(editar({ id, tag, nome, tel, email }));
        setEstaEditando(false);
    };

    const cancelar = () => {
        setTag(tagOriginal);
        setNome(nomeOriginal);
        setTel(telOriginal);
        setEmail(emailOriginal);
        setEstaEditando(false);
    };

    return (
        <main>
            <S.Card>
                {estadoEditando ? (
                    <select value={tag} onChange={(evento) => setTag(evento.target.value)}>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Família">Família</option>
                        <option value="Amigos">Amigos</option>
                        <option value="Favoritos">Favoritos</option>
                    </select>
                ) : (
                    <S.Tag Tag={tag}>{tag}</S.Tag>
                )}
                {estadoEditando ? (
                    <S.Nome 
                        value={nome} 
                        onChange={(evento) => setNome(evento.target.value)} 
                    />
                ) : (
                    <S.Nome disabled value={nome} />
                )}
                {estadoEditando ? (
                    <S.Numb 
                        value={tel} 
                        onChange={(evento) => setTel(evento.target.value)} 
                    />
                ) : (
                    <S.Numb disabled value={tel} />
                )}
                {estadoEditando ? (
                    <S.Email 
                        value={email} 
                        onChange={(evento) => setEmail(evento.target.value)} 
                    />
                ) : (
                    <S.Email disabled value={email} />
                )}
                <S.Barra>
                    {estadoEditando ? (
                        <>
                            <S.BotaoSalvar onClick={salvar}>Salvar</S.BotaoSalvar>
                            <S.BotaoCancelar onClick={cancelar}>Cancelar</S.BotaoCancelar>
                        </>
                    ) : (
                        <>
                            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
                            <S.BotaoDel onClick={() => dispatch(remover(id))}>Excluir</S.BotaoDel>
                        </>
                    )}
                </S.Barra>
            </S.Card>
        </main>
    );
};

export default Contato;
