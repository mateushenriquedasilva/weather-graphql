import { configureStore } from "@reduxjs/toolkit";
import nameCityReducer from '../slice/nameCity/nameCity';

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'city',
    storage
}

const persistedReducer = persistReducer(persistConfig, nameCityReducer)


const store = configureStore({
    reducer: {
        name: persistedReducer
    }
})

const persitor = persistStore(store)
export { store, persitor };