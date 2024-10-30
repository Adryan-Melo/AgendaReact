import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adicionar } from '../../../Store/Reducers/AgendaR'; 
import * as S from './AdicionarContatoStyle'; 

const AdicionarContato = () => {
    const dispatch = useDispatch();
    const [tag, setTag] = useState('Trabalho');
    const [nome, setNome] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');

    const salvarContato = () => {
        const novoContato = {
            id: Date.now(), 
            nome,
            tag,
            tel,
            email,
        };
        dispatch(adicionar(novoContato)); 
        setNome('');
        setTag('Trabalho');
        setTel('');
        setEmail('');
    };

    return (
        <S.Container>
            <S.Titulo>Adicionar Novo Contato</S.Titulo>
            <S.Form>
            <S.Label>
                    Tag:
                    <select value={tag} onChange={(e) => setTag(e.target.value)}>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Família">Família</option>
                        <option value="Amigos">Amigos</option>
                        <option value="Favoritos">Favoritos</option>
                    </select>
                </S.Label>
                
                    <S.Label>
                        <S.Input 
                            type="text" 
                            value={nome} 
                            onChange={(e) => setNome(e.target.value)} 
                            required
                            placeholder="Nome Completo"
                        />
                    </S.Label>
                


                    <S.Label>
                        <S.Input 
                            type="tel" 
                            value={tel} 
                            onChange={(e) => setTel(e.target.value)}
                            required 
                            placeholder="Telefone"/>
                        </S.Label>
                


                <S.Label>
                    <S.Input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email"
                    />
                </S.Label>
                

                <S.Botao type="submit" onClick={salvarContato}>Adicionar Contato</S.Botao>
            </S.Form>
            <S.Circulo to="/">‹</S.Circulo>
        </S.Container>
    );
};

export default AdicionarContato;