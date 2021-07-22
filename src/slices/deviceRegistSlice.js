import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import urls from 'util/url.js';
import md5 from 'md5';

export const fetchDeviceTypes = createAsyncThunk('deviceRegist/fetchDeviceTypes', async () => {
  const res = await axios({
    method: 'GET',
    url: urls.getDeviceTypes()
  });
  console.log(res);
  return res;
});

export const deviceRegistSlice = createSlice({
  name: 'deviceRegist',
  initialState: {
    deviceMac: undefined,
    deviceType: undefined,
    md5Mac: undefined,
    isDhcp: false,
    netPort: undefined,
    ip: undefined,
    netmask: undefined,
    apn: undefined,
    user: undefined,
    pwd: undefined,
    deviceName: undefined,
    deviceTypeArr: []
  },
  reducers: {
    setDeviceMacAndType: (state, action) => {
      const {
        deviceMac, deviceType
      } = action.payload || {};
      state.deviceMac = deviceMac;
      state.deviceType = deviceType;
      state.md5Mac = md5((deviceType || '').replace(/:/g, ' '));
    },
    setApnInfo: (state, action) => {
      const {
        apn, username, password
      } = action.payload || {};
      state.apn = apn || '';
      state.user = username || '';
      state.pwd = password || '';
    }
  },
  extraReducers: {
    [fetchDeviceTypes.fulfilled]: (state, action) => {
      state.deviceTypeArr = (action.payload?.data || []).map(item => ({
        label: item,
        value: item,
        key: item
      }));
    }
  }
});

export const {
  setDeviceMacAndType, setApnInfo
} = deviceRegistSlice.actions;

export default deviceRegistSlice.reducer;
