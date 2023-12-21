import { createSlice } from "@reduxjs/toolkit";

export const rolesSlice = createSlice({
    name: "roles",
    initialState: [],
    reducers: {
        addRole: (state, action) => {
            const newRole = {
                id: Date.parse(new Date()),
                ...action.payload,
            }
            state.push(newRole);
        },
        editRole: (state, action) => {
            const newRole = state.map((item) => item.id === action.payload.id ?
                {
                    ...item,
                    ...action.payload
                }
                :
                item
            )
            return [...newRole];
        },
        deleteRole: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const { addRole, editRole, deleteRole } = rolesSlice.actions;

export default rolesSlice.reducer;