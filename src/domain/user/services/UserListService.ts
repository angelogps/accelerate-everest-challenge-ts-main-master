import UserHelper from '../helper/UserHelper';

class UserList {
  static CreateList(Mock: object[]) {
    let lista = UserHelper.list(Mock);
    return lista;
  }
}

export default UserList;
