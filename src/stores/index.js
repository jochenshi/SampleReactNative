import {configureStore} from '@reduxjs/toolkit';

import deviceRegistReducer from '../slices/deviceRegistSlice';
import globalReducer from '../slices/globalSlice';
import deviceListReducer from '../slices/deviceListSlice';

export default configureStore({
  reducer: {
    deviceRegist: deviceRegistReducer,
    globalStore: globalReducer,
    deviceList: deviceListReducer
  }
});
