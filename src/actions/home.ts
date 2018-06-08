import * as constants from '../constants/actionsTypes';

// import FetchHttp from '../fetch/http';
// export const changeName = (value:any) => {
//   return {
//     type: constants.CHANGE_NAME,
//     value,
//   }
// }

export const changeHello = (path:any) => {
  return {
    type: constants.CHANGE_HELLO,
    path,
  }
}

// export const sendAcion = () => {
//   const sendData = new FetchHttp().get('/web/common/company/getInfo.do', '');
//   return {
//     type: constants.SEND_DATA,
//     data: sendData
//   }
// }