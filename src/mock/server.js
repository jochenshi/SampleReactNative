import {createServer} from 'miragejs';

function formatResponse(data) {
  return {
    code: 0,
    data,
    msg: ''
  };
};

if (window.server) {
  server.shutdown();
}
window.server = createServer({
  routes() {
    this.get('/edge-app-server/device/v1/getDeviceType', () => {
      return formatResponse([
        'Type1',
        'Type2',
        'Type3',
        'Type4'
      ]);
    });

    this.get('/edge-app-server/device/v1/getDefaultConfig', () => {
      return formatResponse([
        {
          port: 'LAN1',
          network: '192.168.1.1',
          address: '1.1.1.1',
          netmask: '2.2.2.2',
          broadcast: '3.3.3.3'
        },
        {
          port: 'LAN2',
          network: '192.168.1.2',
          address: '4.4.4.4',
          netmask: '5.5.5.5',
          broadcast: '6.6.6.6'
        }
      ]);
    });
  }
});
