class util {
  static numberValidator(dados: number) {
    if (!isNaN(dados)) {
      return true;
    } else {
      throw new Error('O campo Number so recebe numeros');
    }
  }

  static fieldValidator(dados: object) {
    const dataValues: any[] = Object.values(dados);
    const dataParameters: string[] = Object.keys(dados);
    let i = 0;

    while (i < dataValues.length) {
      if (dataValues[i] == '') {
        throw new Error(`O campo ${dataParameters[i]} está vazio`);
      }
      i++;
    }

    return true;
  }

  static birthdateValidator(dados: string) {
    if (dados.length >= 8 && dados.length <= 10) {
      if (Date.parse(dados)) {
        return true;
      } else {
        throw new Error('Data invalida');
      }
    } else {
      throw new Error('Data invalida');
    }
  }

  static cpfSize(dados: string) {
    if (dados.length <= 14 && dados.length >= 11) {
      return true;
    } else {
      throw new Error('Tamanho do CPF Invalido');
    }
  }

  static cellphoneSize(dados: string) {
    if (dados.length >= 11 && dados.length <= 13) {
      return true
    } else {
      throw new Error('Numero de telefone Invlido');
    }
  }

  static cpfCheck(dados: string) {
    let cpfClean: String = dados.replace(/\.|-/g, '');

    if (
      !cpfClean ||
      cpfClean.length != 11 ||
      cpfClean == '00000000000' ||
      cpfClean == '11111111111' ||
      cpfClean == '22222222222' ||
      cpfClean == '33333333333' ||
      cpfClean == '44444444444' ||
      cpfClean == '55555555555' ||
      cpfClean == '66666666666' ||
      cpfClean == '77777777777' ||
      cpfClean == '88888888888' ||
      cpfClean == '99999999999'
    ) {
      throw new Error('Cpf Invalido');
    }

    let cpfArray = Array.from(cpfClean, Number);
    const confirmationDigits = cpfArray.slice(-2);
    cpfArray = cpfArray.slice(0, -2);
    function calcDigit(start: number = 1) {
      let result: number | undefined =
        cpfArray.reduce(
          (
            previousValue: number,
            currentValue: number,
            currentIndex: number,
          ) => {
            const totalSum =
              previousValue + currentValue * (currentIndex + start);
            return totalSum;
          },
          0,
        ) % 11;
      if (result >= 10) {
        const resultString = Array.from(result.toString(), Number);
        result = resultString.pop();
      }
      return result;
    }

    const firstDigit = calcDigit();
    if (firstDigit !== confirmationDigits[0]) throw new Error('Cpf invalido');
    cpfArray.push(firstDigit);
    if (calcDigit(0) !== confirmationDigits[1]) throw new Error('Cpf invalido');

    return true;
  }
}

export default util;
