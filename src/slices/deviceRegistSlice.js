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

export const fetchDefaultNetInfo = createAsyncThunk('deviceRegist/fetchDefaultNetInfo', async (deviceType) => {
  const res = await axios({
    method: 'GET',
    url: urls.getDefaultNetInfo(),
    params: {
      deviceType
    }
  });
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
    loading: false,
    deviceTypeArr: [],
    netPortArr: [],
    netPortObj: {}
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
    },
    setNetInfo: (state, action) => {
      const {
        netPort, ip, netmask
      } = action.payload || {};
      state.netPort = netPort;
      state.ip = ip;
      state.netmask = netmask;
    },
    setDhcp: (state, action) => {
      console.log({action});
      state.isDhcp = action.payload;
    },
    resetNetAndApn: (state) => {
      state.netPort = undefined;
      state.ip = '';
      state.netmask = '';
      state.apn = '';
      state.user = '';
      state.pwd = '';
      state.isDhcp = false;
      state.netPortArr = [];
      state.netPortObj = {};
    },
    resetDeviceMacAndType: (state) => {
      state.deviceMac = '';
      state.deviceType = undefined;
      state.md5Mac = '';
      state.deviceTypeArr = [];
    }
  },
  extraReducers: {
    [fetchDeviceTypes.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchDeviceTypes.fulfilled]: (state, action) => {
      state.deviceTypeArr = (action.payload?.data || []).map(item => ({
        label: item,
        value: item,
        key: item
      }));
      state.loading = false;
    },
    [fetchDeviceTypes.rejected]: (state) => {
      state.loading = false;
    },
    [fetchDefaultNetInfo.pending]: (state) => {
      state.loading = true;
    },
    [fetchDefaultNetInfo.fulfilled]: (state, action) => {
      const data = action?.payload?.data || [];
      const obj = {};
      const arr = [];
      data.forEach((item) => {
        obj[item.port] = item;
        arr.push({
          label: item.port,
          value: item.port
        });
      });
      state.netPortArr = arr;
      state.netPortObj = obj;
      state.loading = false;
    },
    [fetchDefaultNetInfo.rejected]: (state) => {
      state.loading = false;
    }
  }
});

export const {
  setDeviceMacAndType, setApnInfo, setNetInfo, setDhcp, resetNetAndApn, resetDeviceMacAndType
} = deviceRegistSlice.actions;

export default deviceRegistSlice.reducer;
