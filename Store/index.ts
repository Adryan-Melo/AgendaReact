import {configureStore} from '@reduxjs/toolkit'
import agendaReducer from './Reducers/AgendaR'

const store = configureStore({
    reducer:{
        agenda: agendaReducer,

    }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store