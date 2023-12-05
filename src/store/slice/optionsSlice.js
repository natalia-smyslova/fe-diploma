import { createSlice } from '@reduxjs/toolkit'

const localStorageData = localStorage.getItem('options')

const emptyData = {
  options: {
    haveSecondClass: false,
    haveThirdClass: false,
    haveFourthClass: false,
    haveFirstClass: false,
    haveWifi: false,
    isExpress: false,
    haveAirConditioning: false
  }
}

const initialState = localStorageData ? JSON.parse(localStorageData) : emptyData

const optionsSlise = createSlice({
  name: 'optionsSlice',
  initialState,
  reducers: {
    removeOptions() {
      return emptyData
    },
    changeOptions(state, action) {
      const { name, value } = action.payload
      state.options[name] = value
    },
  },
})

export const { removeOptions, changeOptions } = optionsSlise.actions

export default optionsSlise
