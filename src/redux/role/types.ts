import { Action } from "redux";
import { IBaseStoreState } from "../types";

export interface IRoleState extends IBaseStoreState {
    roles: IRoleEntity[]
}

export interface IGetAllRoles extends Action {
    type: '@@role/GET_ALL_ROLES';
    payload: {
        state: IRoleState
    }
}
export interface IGetAllRolesSuccess extends Action {
    type: '@@role/GET_ALL_ROLES_SUCCESS';
    payload: {
        state: IRoleState
    }
}

export interface IGetAllRolesError extends Action {
    type: '@@role/GET_ALL_ROLES_ERROR';
    payload: {
        state: IRoleState
    }
}
export type RoleActions = IGetAllRoles | IGetAllRolesSuccess | IGetAllRolesError;

interface IRoleEntity {
    roleCode: string,
    roleName: string,
    isEnabled: string,
    created: Date,
    updated: Date,
    updatedBy: string
}

export class RoleEntity implements IRoleEntity {
    public roleCode: string;
    public roleName: string;
    public isEnabled: string;
    public created: Date;
    public updated: Date;
    public updatedBy: string;

    constructor(code: string, name: string) {
        this.roleCode = code;
        this.roleName = name;
    }


}