import third from '../../components/SeatsSelection/SelectionBlock/CoachType/img/third-class.svg';
import first from '../../components/SeatsSelection/SelectionBlock/CoachType/img/first-class.svg';
import fourth from '../../components/SeatsSelection/SelectionBlock/CoachType/img/fourth-class.svg';
import second from '../../components/SeatsSelection/SelectionBlock/CoachType/img/second-class.svg';
import express from '../../components/LastTickets/LastTicketsCard/icons/express.svg';
import wifi from '../../components/LastTickets/LastTicketsCard/icons/wifi.svg';
import conditioner from '../../components/LastTickets/LastTicketsCard/icons/conditioner.svg';

const options = [
  { id: 1, img: second, title: 'Купе', name: 'haveSecondClass', value: false },
  { id: 2, img: third, title: 'Плацкарт', name: 'haveThirdClass', value: false },
  { id: 3, img: fourth, title: 'Сидячий', name: 'haveFourthClass', value: false },
  { id: 4, img: first, title: 'Люкс', name: 'haveFirstClass', value: false },
  { id: 5, img: wifi, title: 'Wi-Fi', name: 'haveWifi', value: false },
  { id: 6, img: express, title: 'Экспресс', name: 'isExpress', value: false },
  { id: 7, img: conditioner, title: 'Кондиционер', name: 'haveAirConditioning', value: false },
];

export default options;