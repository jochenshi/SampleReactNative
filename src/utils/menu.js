import LoginPage from 'src/pages/login';
import DeviceListPage from 'src/pages/deviceList';
import CodeScanPage from 'src/pages/codeScan';
import DeviceManualInputPage from 'src/pages/deviceManualInput';
import DeviceInitPage from 'src/pages/deviceInit';
import DeviceInitNetPage from 'src/pages/deviceInitNet';
import DeviceInitApnPage from 'src/pages/deviceInitApn';
import DeviceRegistPage from 'src/pages/deviceRegist';
import DeviceRegistFailPage from 'src/pages/resultPage/deviceRegistFail.js';
import DeviceGetFailPage from 'src/pages/resultPage/deviceGetFail.js';
import DeviceDeleteFailPage from 'src/pages/resultPage/deviceDeleteFail.js';
import DeviceDeleteSuccessPage from 'src/pages/resultPage/deviceDeleteSuccess.js';
import DeviceRegistSuccessPage from 'src/pages/resultPage/deviceRegistSuccess.js';
import DeviceDetailPage from 'src/pages/deviceDetail';
import DeviceNameEditPage from 'src/pages/editDeviceName';
import DeviceIpEditPage from 'src/pages/editIp';
import TestPage from 'src/pages/testPage';

export const menuArr = [
  {
    path: 'login',
    component: LoginPage,
    options: {
      headerShown: false,
      gestureEnabled: false
    }
  },
  {
    path: 'deviceList',
    component: DeviceListPage,
    options: {
      title: '设备列表',
      headerLeft: () => null,
      gestureEnabled: false
    }
  },
  {
    path: 'deviceManualInput',
    component: DeviceManualInputPage,
    options: {
      title: '手动输入'
    }
  },
  {
    path: 'deviceInit',
    component: DeviceInitPage,
    options: {
      title: '设备初始配置'
    }
  },
  {
    path: 'deviceInitNet',
    component: DeviceInitNetPage,
    options: {
      title: '设备初始配置'
    }
  },
  {
    path: 'deviceInitApn',
    component: DeviceInitApnPage,
    options: {
      title: '设备初始配置'
    }
  },
  {
    path: 'deviceRegist',
    component: DeviceRegistPage,
    options: {
      title: '设备注册'
    }
  },
  {
    path: 'codeScan',
    component: CodeScanPage
  },
  {
    path: 'deviceRegistFail',
    component: DeviceRegistFailPage,
    options: {
      title: '设备注册'
    }
  },
  {
    path: 'deviceGetFail',
    component: DeviceGetFailPage,
    options: {
      title: '设备删除'
    }
  },
  {
    path: 'deviceDeleteFail',
    component: DeviceDeleteFailPage,
    options: {
      title: '设备删除'
    }
  },
  {
    path: 'deviceDeleteSuccess',
    component: DeviceDeleteSuccessPage,
    options: {
      title: '设备删除'
    }
  },
  {
    path: 'deviceRegistSuccess',
    component: DeviceRegistSuccessPage,
    options: {
      title: '设备注册'
    }
  },
  {
    path: 'deviceDetail',
    component: DeviceDetailPage,
    options: {
      title: '设备详情'
    }
  },
  {
    path: 'deviceNameEdit',
    component: DeviceNameEditPage,
    options: {
      title: '名称'
    }
  },
  {
    path: 'deviceIpEdit',
    component: DeviceIpEditPage,
    options: {
      title: 'IP'
    }
  }
];