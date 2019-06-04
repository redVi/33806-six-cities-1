import NameSpace from '@/reducer/namespaces';

const NAME_SPACE = NameSpace.USER;

export const checkAuthorization = (state: object) => state[NAME_SPACE].isAuthorizationRequired;

export const getUserData = (state: object) => state[NAME_SPACE].user;
