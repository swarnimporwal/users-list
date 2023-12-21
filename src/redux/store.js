import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./rolesSlice";
import userReducer from "./usersSlice";

export default configureStore({
    reducer:{
        roles: roleReducer,
        users: userReducer
    }
});