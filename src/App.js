import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import PassengersPage from './pages/PassangersPage/PassangersPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import SeatSelectionPage from './pages/SeatsSelectionPage/SeatsSelectionPage';
import TrainSelectionPage from './pages/TrainSelectionPage/TrainSelectionPage';
import SuccessfulOrderPage from './pages/SuccessfulOrderPage/SuccessfulOrderPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage/OrderConfirmationPage';

import links from './utils/constants/links';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path={links.main} element={<MainPage />} />
        <Route path={links.trains} element={<TrainSelectionPage />} />
        <Route path={links.seats} element={<SeatSelectionPage />} />
        <Route path={links.passengers} element={<PassengersPage />} />
        <Route
          path={links.payment}
          element={<PaymentPage />}
        />
        <Route
          path={links.orderConfirmation}
          element={<OrderConfirmationPage />}
        />
        <Route path={links.success} element={<SuccessfulOrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
