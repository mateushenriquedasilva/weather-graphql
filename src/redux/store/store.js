import { configureStore } from "@reduxjs/toolkit";
import nameCityReducer from '../slice/nameCity/nameCity';

export default configureStore({
    reducer: {
        name: nameCityReducer
    }
})