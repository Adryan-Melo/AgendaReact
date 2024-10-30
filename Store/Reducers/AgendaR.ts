import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import Agenda from '../../src/Models/ModelAgenda'

const agendaSlice = createSlice({
    name: 'agenda',
    initialState: {
        itens: [
                new Agenda('Pedro Alves', 'Família', '9741321649', 'Pedro@email.com', 1),

                new Agenda('Maria Alves', 'Trabalho', '9841321649', 'Maria@email.com', 2)
            ]
            
    },
    reducers:{
        remover: (state, action: PayloadAction<number>)=>{
            state.itens=state.itens.filter(agenda => agenda.id !== action.payload)
        },
        editar: (state, action: PayloadAction<Agenda>) => {
            const indexDaAgenda = state.itens.findIndex(a => a.id === action.payload.id);
            if (indexDaAgenda >= 0) {
                state.itens[indexDaAgenda] = action.payload
            }
        },
        adicionar: (state, action: PayloadAction<Agenda>) => {
                state.itens.push(action.payload); 
            }
        }
    });
    
    export const { remover, editar, adicionar } = agendaSlice.actions;
    
    export default agendaSlice.reducer