import { Reducer } from "redux";
import { IRoleState, RoleActions } from "./types";

export const initialState: IRoleState = {
    errorMessage: '',
    isLoading: false,
    roles: []
}

const roleReducer: Reducer<IRoleState> = (state: IRoleState = initialState, action: RoleActions) => {
    switch (action.type) {
        case '@@role/GET_ALL_ROLES':
            return { ...state, state: action.payload };
        case '@@role/GET_ALL_ROLES_SUCCESS':
            return { ...state, state: action.payload };
        case '@@role/GET_ALL_ROLES_ERROR':
            return { ...state, state: action.payload };
        default:
            return state;
    }
};

export default roleReducer;