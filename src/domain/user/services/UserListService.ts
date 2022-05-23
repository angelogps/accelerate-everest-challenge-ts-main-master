import UserHelper from '../helper/UserHelper';
import Iuser from '../types/UserTypes';

class UserList {
  static CreateList(Mock: Iuser[]) {
    let lista = UserHelper.list(Mock);
    return lista;
  }
}

export default UserList;
