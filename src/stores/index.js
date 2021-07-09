import {configureStore} from '@reduxjs/toolkit';

import deviceRegistReducer from '../slices/deviceRegistSlice';
import globalReducer from '../slices/globalSlice';

export default configureStore({
  reducer: {
    deviceRegister: deviceRegistReducer,
    global: globalReducer
  }
});
