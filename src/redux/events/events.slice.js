import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { eventsInitState } from './events.init-state';

const eventsSlice = createSlice({  
  name: 'events',
  initialState: eventsInitState,
    reducers: {
    setInEvents: (state, { payload }) => {     
      state.data = [payload,...state.data];    
      },
    upDataEvents: (state, { payload }) => {     
      state.data = [payload];    
    },
    deleteEvent: (state, { payload }) => {     
      state.events = state.events.filter(event => event.id !== payload);
    },
    setInFilter: (state, { payload }) => {      
      state.filter = payload;
    },
    setInActivePage: (state, { payload }) => {      
      state.isActivPage = payload;
    },
  },
});

export const { setInEvents, deleteEvent,setInFilter,setInActivePage,upDataEvents} = eventsSlice.actions;

const persistConfig = {
  key: 'events',
  storage,
  whitelist: ['events'],  
};

export const eventsReducer = persistReducer(persistConfig, eventsSlice.reducer);