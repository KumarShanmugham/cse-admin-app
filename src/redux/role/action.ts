import { ActionCreator } from "redux";
import { IGetAllRoles, IGetAllRolesError, IGetAllRolesSuccess, IRoleState } from "./types";

export const GetAllRoles: ActionCreator<IGetAllRoles> = (state: IRoleState) => ({
    payload: {
        state
    },
    type: '@@role/GET_ALL_ROLES'
});

export const GetAllRoleSuccess: ActionCreator<IGetAllRolesSuccess> = (state: IRoleState) => ({
    payload: {
        state
    },
    type: '@@role/GET_ALL_ROLES_SUCCESS'
});

export const GetAllRoleError: ActionCreator<IGetAllRolesError> = (state: IRoleState) => ({
    payload: {
        state
    },
    type: '@@role/GET_ALL_ROLES_ERROR'
});