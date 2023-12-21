import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "roles",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            console.log('action.payload', action.payload)
            const newUser = {
                id: Date.parse(new Date()),
                ...action.payload,
            }

            state.push(newUser);
        },
        editUser: (state, action) => {
            const newUser = state.map((item) => item.id === action.payload.id ?
                {
                    ...item,
                    ...action.payload,
                }
                :
                item
            )
            return [...newUser];
        },
        deleteUser: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const { addUser, editUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;