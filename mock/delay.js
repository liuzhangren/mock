export default function delay(proxy, time) {
  let mockApi = {};
  Object.keys(proxy).forEach(function (key) {
    const result = proxy[key].$body || proxy[key];
    if (Object.prototype.toString.call(result) === '[object String]' && /^http/.test(result)) {
      mockApi[key] = proxy[key];
    } else {
      mockApi[key] = function (req, res) {
        let foo;
        if (Object.prototype.toString.call(result) === '[object Function]') {
          foo = result;
        } else {
          foo = function (req, res) {
            res.json(result);
          };
        }

        setTimeout(function () {
          foo(req, res);
        }, time);
      };
    }
  });
  mockApi.__mockData = proxy;
  return mockApi;
}