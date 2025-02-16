const request = require('supertest');
const app = require('../app');

test('GET / returns "Hello AI/CI/CD!"', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello AI/CI/CD!');
});
