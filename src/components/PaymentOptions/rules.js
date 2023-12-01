const rules = {
  lastName: [
    {
      required: true,
      message: 'Введите фамилию: 1 - 50 символов',
      min: 1,
      max: 50,
    },
  ],
  firstName: [
    {
      required: true,
      message: 'Введите имя: 1 - 50 символов',
      min: 1,
      max: 50,
    },
  ],
  fathersName: [
    {
      required: false,
      min: 0,
      max: 50,
    },
  ],
  email: [
    {
      required: true,
      message: 'Введите корректный email',
      type: 'email',
    },
  ],
  phone: [
    {
      required: true,
      message: 'Введите номер в формате 912345678',
      type: 'number',
      min: 9111111111,
      max: 9999999999,
    },
  ],
  paymentMethod: [
    {
      required: true,
      message: 'выберете одну из опций',
    },
  ],
};

export default rules;