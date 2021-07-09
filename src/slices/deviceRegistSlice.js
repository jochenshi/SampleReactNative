import {createSlice} from '@reduxjs/toolkit';

export const deviceRegistSlice = createSlice({
  name: 'deviceRegist',
  initialState: {
    deviceMac: undefined,
    deviceType: undefined,
    isDhcp: false,
    netPort: undefined,
    ip: undefined,
    netmask: undefined,
    apn: undefined,
    apnUser: undefined,
    apnPassword: undefined,
    deviceName: undefined
  },
  reducers: {
    setDeviceMacAndType: (state, action) => {
      const {
        mac, deviceType
      } = action.payload || {};
      state.deviceMac = mac;
      state.deviceType = deviceType;
    }
  }
});

export const {
  setDeviceMacAndType
} = deviceRegistSlice.actions;

export default deviceRegistSlice.reducer;
