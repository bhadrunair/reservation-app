import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface customerType{
    name: string,
    id: number,
    value: string[]
}

interface customer{
    value: customerType[]
}

const initialState: customer = {
    value: []
}

interface foodOrder{
    id: number,
    food: string
}



const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers:{
        addCustomer: (state, action:PayloadAction<customerType>) => {
            state.value.push(action.payload);
        },

        addFood: (state, action:PayloadAction<foodOrder>) => {
            state.value.forEach(boi => (action.payload.id === boi.id )&& boi.value.push(action.payload.food));
            //console.log(state.value);
        },
        mapID: (state) => {
            state.value.forEach((boi, index) => boi.id = index);
            //console.log(state.value);
        }

    }
})

export const {addCustomer, addFood, mapID} = customerSlice.actions;

export default customerSlice.reducer