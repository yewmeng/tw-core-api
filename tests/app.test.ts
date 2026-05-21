import request from 'supertest';
import app from '../src/index';

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello World');
  });
});

describe('GET /api-docs.json', () => {
  it('should return swagger spec', async () => {
    const res = await request(app).get('/api-docs.json');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('openapi');
    expect(res.body).toHaveProperty('info');
  });
});
