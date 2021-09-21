import urlValidator from './Validators/UrlValidator';

const basicFormRules = [
  { name: 'name', value: 'É obrigatório' },
  { name: 'url', value: 'É obrigatório', validator: urlValidator },
];

export default basicFormRules;
