import { createSlice } from "@reduxjs/toolkit"; 

export const nameCitySlice = createSlice({
    name: 'nameCity',
    initialState: {
        name: 'Jaboatao dos Guararapes'
    },
    reducers: {
        getName: (state,action) => {
            state.name = action.payload
        }
    }
})

export const { getName } = nameCitySlice.actions
export default nameCitySlice.reducer