const request = require('supertest');
const app = require('../app');

describe('User Management System', () => {
    it('should render the home page', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Welcome to User Management System');
    });

    it('should register a new user', async () => {
        const res = await request(app).post('/register').send({
            username: 'testuser',
            email: 'test@example.com',
            password: 'password123'
        });
        expect(res.statusCode).toEqual(302); // Redirect after registration
    });

    it('should login an existing user', async () => {
        const res = await request(app).post('/login').send({
            email: 'test@example.com',
            password: 'password123'
        });
        expect(res.statusCode).toEqual(302); // Redirect after login
    });
});
