import NameSpace from '@/reducer/namespaces';

const NAME_SPACE = NameSpace.USER;

export const checkAuthorization = (state: object) => state[NAME_SPACE].isLoggedIn;
export const getUserData = (state: object) => state[NAME_SPACE].user;
export const getFavorites = (state: object) => state[NAME_SPACE].favorites;
