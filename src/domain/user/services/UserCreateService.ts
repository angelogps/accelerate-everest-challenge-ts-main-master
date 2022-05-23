import UserHelper from '../helper/UserHelper';
import util from '../../../util/util';
import Mock from '../mocks/UserMock';
import Iuser from '../types/UserTypes';

class UserService {
  static UserCreate(dados: Iuser) {
    let email = UserHelper.emailValidator(
      dados.email,
      dados.email_confirmation,
    );
    let field = util.fieldValidator(dados);
    let number = util.numberValidator(dados.number);
    let birthdate = util.birthdateValidator(dados.birthdate);
    let cpf = util.cpfSize(dados.cpf);
    let cpfCheck = util.cpfCheck(dados.cpf);
    let cellphone = util.cellphoneSize(dados.cellphone);
    let emailCheck = UserHelper.emailCheck(dados.email, Mock);

    let validator: boolean[] = [
      email,
      field,
      number,
      birthdate,
      cpf,
      cellphone,
      emailCheck,
      cpfCheck,
    ];

    if (validator) {
      // let id: number = 0;
      // id = Mock.length + 1;
      // dados['id'] = id;
      Mock.push(dados);
      console.log(Mock);
    }
    return validator;
  }
}

export default UserService;
