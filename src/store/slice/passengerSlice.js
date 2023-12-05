import { createSlice } from '@reduxjs/toolkit';

import fieldParams from '../../components/PassangersSelection/PassengerCard/FormInputs/fieldParams';

const localStorageData = localStorage.getItem('passenger');

const emptyData = {
  passengers: []
}

const initialState = localStorageData ? JSON.parse(localStorageData) : emptyData;

const passengerSlice = createSlice({
  name: 'passengerSlice',
  initialState,
  reducers: {
    addPassenger(state, action) {
      state.passengers = [...state.passengers.filter(item => item.id !== action.payload.id), action.payload]
    },

    editPassenger(state, action) {
      const ids = state.passengers.map(item => item.id);
      const sameId = ids.indexOf(action.payload.id);

      if (sameId !== -1) {
        Object.keys(action.payload).forEach(
          (key, index) => (state.passengers[sameId][key] = Object.values(action.payload)[index])
        );
      }
    },

    removeSeatInfo(state) {
      const deleteSeatInfo = (passenger) => {
        delete passenger[fieldParams.seatDep];
        delete passenger[fieldParams.seatArr];
        delete passenger[fieldParams.depOnly];
      };

      state.passengers.map((passenger) => deleteSeatInfo(passenger));
    },

    removeSeatInfoAgain(state, action) {
      const { coachId, seatNumber } = action.payload;
      const seat = `${coachId}:${seatNumber}`;
      const deleteSeatInfo = (passenger) => {
        if (passenger[fieldParams.seatDep] === seat) {
          delete passenger[fieldParams.seatDep];
            if (passenger[fieldParams.depOnly]) {
              delete passenger[fieldParams.depOnly];
            }
          }
        if (passenger[fieldParams.seatArr] === seat) {
          delete passenger[fieldParams.seatArr];
        }
      };

      state.passengers.map((passenger) => deleteSeatInfo(passenger));
    },

    removePassenger(state, action) {
      state.passengers = state.passengers.filter(
         (item) => item.id !== action.payload
      );
    },

    removeAllPassengers() {
      return emptyData;
    }
  }
});

export const { addPassenger, editPassenger, removeSeatInfo, removeSeatInfoAgain, removePassenger, removeAllPassengers }  = passengerSlice.actions;

export default passengerSlice;