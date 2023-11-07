import econom from '../../components/SeatsSelection/SelectionBlock/CoachType/img/econom.svg';
import luxury from '../../components/SeatsSelection/SelectionBlock/CoachType/img/luxury.svg';
import seat from '../../components/SeatsSelection/SelectionBlock/CoachType/img/seat.svg';
import compartment from '../../components/SeatsSelection/SelectionBlock/CoachType/img/compartment.svg';
import express from '../../components/LastTickets/LastTicketsCard/icons/express.svg';
import wifi from '../../components/LastTickets/LastTicketsCard/icons/wifi.svg';

const options = [
  { id: 1, img: compartment, title: 'Купе', name: 'compartment' },
  { id: 2, img: econom, title: 'Плацкарт', name: 'econom' },
  { id: 3, img: seat, title: 'Сидячий', name: 'seat' },
  { id: 4, img: luxury, title: 'Люкс', name: 'luxury' },
  { id: 5, img: wifi, title: 'Wi-Fi', name: 'wifi' },
  { id: 6, img: express, title: 'Экспресс', name: 'express' },
];

export default options;