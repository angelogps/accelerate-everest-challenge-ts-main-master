class UserHelper {
  static emailValidator(email: String, email_confirmation: String) {
    if (email === email_confirmation) {
      return true;
    } else {
      throw new Error('Erro email');
    }
  }

  static emailCheck(dados: string, Mock: object[]) {
    const emailMock: any[] = Object.values(Mock);
    const lista = emailMock.map((item) => item.email);

    lista.forEach((lista) => {
      if (lista != dados) {
        return true;
      } else {
        throw new Error('Email ja existe');
      }
    });
    return true
  }

  static list(mock: object[]) {
    const mocks: any[] = Object.values(mock);
    const listaEmail = mocks.map((item) => item.email);
    const listaName = mocks.map((item) => item.full_name);
    let listArray: Object[] = [];

    for (let i = 0; i < mocks.length; i++) {
      let objeto: object = {
        name: listaName[i],
        email: listaEmail[i],
      };
      listArray.push(objeto);
    }
    return listArray;
  }
}

export default UserHelper;
