import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './allPersons';
import favoritePersons from './favoritePersons';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfiguration = {
    key: "root",
    version: 1,
    storage,
};

const reducer = combineReducers({
    counter: counterReducer,
    favorites: favoritePersons,
});

const persistedReducer = persistReducer(persistConfiguration, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: persistedReducer,
            },
            serializableCheck: false,
        }),
});

