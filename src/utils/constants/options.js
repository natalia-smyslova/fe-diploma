import third from '../../components/SeatsSelection/SelectionBlock/CoachType/img/third-class.svg';
import first from '../../components/SeatsSelection/SelectionBlock/CoachType/img/first-class.svg';
import fourth from '../../components/SeatsSelection/SelectionBlock/CoachType/img/fourth-class.svg';
import second from '../../components/SeatsSelection/SelectionBlock/CoachType/img/second-class.svg';
import express from '../../components/LastTickets/LastTicketsCard/icons/express.svg';
import wifi from '../../components/LastTickets/LastTicketsCard/icons/wifi.svg';

const options = [
  { id: 1, img: second, title: 'Купе', name: 'secondClass' },
  { id: 2, img: third, title: 'Плацкарт', name: 'thirdClass' },
  { id: 3, img: fourth, title: 'Сидячий', name: 'fourthClass' },
  { id: 4, img: first, title: 'Люкс', name: 'firstClass' },
  { id: 5, img: express, title: 'Wi-Fi', name: 'wifi' },
  { id: 6, img: wifi, title: 'Экспресс', name: 'express' },
];

export default options;