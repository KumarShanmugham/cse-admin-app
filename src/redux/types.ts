import { combineReducers, Reducer } from "redux";
import roleReducer from "src/redux/role/reducer";
import { IRoleState } from "./role/types";

export interface IBaseStoreState {
    isLoading: boolean,
    errorMessage: string
}
export interface IApplicationState {
    roles: IRoleState
    // user: IUserEntity
}
// interface IUserEntity {
//     displayName: string,
//     userId: string,
//     isAuthenticated: boolean,
//     roles: string[]
// }

export const allReducers: Reducer<IApplicationState> = combineReducers<IApplicationState>({
    roles: roleReducer
});