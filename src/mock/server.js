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
  }
});
