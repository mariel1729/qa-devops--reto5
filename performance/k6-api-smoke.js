import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '15s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<600'],
    checks: ['rate>0.95'],
  },
};

export default function () {
  const res = http.get('https://test.k6.io/');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'html response received': (r) => r.body.includes('<html') || r.body.includes('<!doctype'),
  });

  sleep(1);
}
