const rules = {
  passengerType: [
    {
      required: true,
      message: 'Выберите тип пассажира',
    },
  ],
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
  gender: [
    {
      required: true,
      message: 'Выберите пол',
    },
  ],
  dateOfBirth: [
    {
      required: true,
      message: 'Выберите дату рождения',
      type: 'date',
    },
  ],
  docType: [
    {
      required: true,
      message: 'Выберите тип проездного документа',
    },
  ],

  docSerialNumber: [
    {
      required: true,
      message: 'Введите 4 символа',
      type: 'number',
      min: 1111,
      max: 9999,
    },
  ],
  docNumberPass: [
    {
      required: true,
      message: 'Введите 6 символов',
      type: 'number',
      min: 111111,
      max: 999999,
    },
  ],

//


  docNumberSertif: [
    {
      required: true,
      message: 'Поле обязательно для заполнения',
    },
    {
      pattern: /^[IVXLC]{1,4}-[А-Я]{2}-\d{6}$/,
      message: 'Введите данные документа. Пример: VIII-ЫП-123456',
    },
  ],
  seatDepartment: [
    {
      required: true,
      message: 'Выберите место',
    },
  ],
  seatArrival: [
    {
      required: true,
      message: 'Выберите место',
    },
  ],
};

export default rules;