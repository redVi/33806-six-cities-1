import {combineReducers} from 'redux';
import {reducer as data} from '@/reducer/data/data';
import {reducer as user} from '@/reducer/user/user';

import NameSpace from '@/reducer/namespaces';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
