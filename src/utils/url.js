import {EDGE_MOBILE_PREFIX} from './constant';

export default {
  getDeviceTypes: () => `/${EDGE_MOBILE_PREFIX}/device/v1/getDeviceType`,
  getDefaultNetInfo: () => `/${EDGE_MOBILE_PREFIX}/device/v1/getDefaultConfig`,
  getDeviceList: () => `/${EDGE_MOBILE_PREFIX}/device/v1/pageQueryDevices`,
  deleteDevice: () => `/${EDGE_MOBILE_PREFIX}/device/v1/deleteDevice`,
  registDevice: () => `/${EDGE_MOBILE_PREFIX}/device/v1/registerDevice`,
  searchDevice: () => `/${EDGE_MOBILE_PREFIX}/device/v1/searchDevices`,
  updateDevice: () => `/${EDGE_MOBILE_PREFIX}/device/v1/updateDevice`,
  getDeviceDetail: () => `/${EDGE_MOBILE_PREFIX}/device/v1/getDevice`,
  checkDeviceSn: () => `/${EDGE_MOBILE_PREFIX}/device/v1/checkSn`
};
