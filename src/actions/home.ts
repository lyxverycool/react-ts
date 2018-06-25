import * as constants from '../constants/actionsTypes';
import FetchHttp from '../fetch/http';

export default interface ILIST {
  type: constants.GET_LIST,
  data: {}
}

export const GetListAction = (): ILIST => {
  const poetyData = new FetchHttp().get('/index/test', '');
  return {
    type: constants.GET_LIST,
    data: poetyData
  }
}

