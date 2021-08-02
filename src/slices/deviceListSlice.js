import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import urls from 'util/url.js';

export const queryDeviceList = createAsyncThunk('deviceList/queryDeviceList', async (params) => {
  const res = await axios({
    method: 'POST',
    url: urls.getDeviceList(),
    params
  });
  return res;
});

export const deleteDeviceRecord = createAsyncThunk('deviceList/deleteDevice', async (deviceId) => {
  const res = await axios({
    method: 'GET',
    url: urls.deleteDevice(),
    params: {
      sn: deviceId
    }
  });
  return res;
});

export const deviceListSlice = createSlice({
  name: 'deviceList',
  initialState: {
    deviceList: [],
    listRefreshing: false,
    pageLoading: false,
    pageSize: 10,
    pageNo: 1,
    filterObj: {}
  },
  reducers: {
    setListRefreshing: (state, action) => {
      state.listRefreshing = action.payload;
    },
    setPageLoading: (state, action) => {
      state.pageLoading = action.payload;
    },
    setFilterObj: (state, payload) => {
      state.filterObj = action.payload || {};
    }
  },
  extraReducers: {
    [queryDeviceList.fulfilled]: (state, action) => {
      const {
        data: {
          record, pageNo, pageSize
        } = {}
      } = action.payload || {};
      if (pageNo === 1) {
        state.deviceList = record || [];
      } else {
        state.deviceList = [...state.deviceList, record || []];
      }
      state.pageNo = pageNo;
      state.pageSize = pageSize;
    }
  }
});

export const {
  setListRefreshing, setPageLoading, setFilterObj
} = deviceListSlice.actions;

export default deviceListSlice.reducer;
