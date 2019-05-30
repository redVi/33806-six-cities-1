import NameSpace from '@/reducer/namespaces';

const NAME_SPACE = NameSpace.USER;

export const checkAithorization = (state) => state[NAME_SPACE].isAuthorizationRequired;
