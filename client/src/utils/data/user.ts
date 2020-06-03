import { makeRequest } from 'utils/network/request';
import { AuthResponse } from 'types/network';
import { User, Credentials, UserData } from 'types/user';
import { Method } from 'types/network';
import { USERS } from 'utils/network/endpoints';
import * as M from 'utils/network/errorMessages';

export const login = async (data: Credentials) => {
  return await makeRequest<AuthResponse, Credentials>(
    Method.POST,
    USERS,
    M.LOG_IN,
    data
  );
}

export const signup = async (data: UserData) => {
  return await makeRequest<AuthResponse, UserData>(
    Method.POST,
    USERS + '/signup',
    M.SIGN_UP,
    data
  );
}

export const thirdPartyAuth = async (data: UserData) => {
  return await makeRequest<AuthResponse, UserData>(
    Method.POST,
    USERS + '/thirdPartyAuth',
    M.THIRD_PARTY_AUTH,
    data
  );
}

export const logout = async (token: string) => {
  return await makeRequest(
    Method.POST,
    USERS + '/logout',
    M.LOGOUT,
    undefined,
    token
  );
}

export const getUser = async (token: string) => {
  return await makeRequest<User>(
    Method.GET,
    USERS + '/me',
    M.FETCH_USER,
    undefined,
    token
  );
}

export const getAllUsers = async () => {
  return await makeRequest<User[]>(
    Method.GET,
    USERS + '/all',
    M.FETCH_USERS
  );
}
