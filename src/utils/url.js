import {EDGE_MOBILE_PREFIX} from './constant';

function getBaseUrl() {
  return 'http://beta-yapi-cn2.eniot.io/mock/412';
}

export default {
  getDeviceTypes: () => `${getBaseUrl()}/${EDGE_MOBILE_PREFIX}/device/v1/getDeviceType`,
  getDefaultNetInfo: () => `${getBaseUrl()}/${EDGE_MOBILE_PREFIX}/device/v1/getDefaultConfig`,
  getDeviceList: () => `${getBaseUrl()}/${EDGE_MOBILE_PREFIX}/device/v1/pageQueryDevices`,
  deleteDevice: () => `${getBaseUrl()}/${EDGE_MOBILE_PREFIX}/device/v1/deleteDevice`,
  registDevice: () => `${getBaseUrl()}/${EDGE_MOBILE_PREFIX}/device/v1/registerDevice`,
  searchDevice: () => `${getBaseUrl()}/${EDGE_MOBILE_PREFIX}/device/v1/searchDevices`,
  updateDevice: () => `${getBaseUrl()}/${EDGE_MOBILE_PREFIX}/device/v1/updateDevice`,
  getDeviceDetail: () => `${getBaseUrl()}/${EDGE_MOBILE_PREFIX}/device/v1/getDevice`,
  checkDeviceSn: () => `${getBaseUrl()}/${EDGE_MOBILE_PREFIX}/device/v1/checkSn`
};
