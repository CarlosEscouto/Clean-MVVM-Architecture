import URLDomainValidatorRule from '@/app/Domain/Use-Cases/URLDomainValidatorUseCase';
import URLGroupValidationRule from '@/app/Domain/Use-Cases/URLGroupValidationUseCase';
import URLProtocolValidatorUseCase from '@/app/Domain/Use-Cases/URLProtocolValidatorUseCase';

/**
 *
 *
 * @param {*} rule
 * @param {*} value
 * @param {CallableFunction} callback
 * @return {*}  {CallableFunction}
 */
const urlValidator = (rule: any, value: string, callback: CallableFunction): CallableFunction => {
  if (new URLProtocolValidatorUseCase().run(value)) {
    return callback(
      new Error('É necessario informar o protocolo: https:// ou http://. E não iniciar o domínio com números.'),
    );
  }

  if (new URLDomainValidatorRule().run(value)) {
    return callback(
      new Error('O domínio só pode conter letras, números e hífens. Mínimo de 2 caracteres e máximo de 63.'),
    );
  }

  if (new URLGroupValidationRule().run(value)) {
    return callback(
      new Error(
        'Obrigatório informar o agrupamento da url. Ex: .com, .org, .net. Ter no mínimo 3 caracteres (apenas letras).',
      ),
    );
  }

  return callback();
};

export default urlValidator;
