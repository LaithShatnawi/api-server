'use strict';
const { app } = require('../src/server');
const { db } = require('../src/models/index');
const supertest = require('supertest');
const mockServerMethods = supertest(app);

beforeAll(async () => {
    await db.sync();
})

describe('testing my api server', () => {
    it('testing home route', async () => {
        const response = await mockServerMethods.get('/');
        expect(response.status).toBe(200);
    });
    it('return 404 in an invalid routes', async () => {
        const response = await mockServerMethods.get('/laith');
        expect(response.status).toBe(404);
    });
    it('return 404 in an invalid method', async () => {
        const response = await mockServerMethods.post('/');
        expect(response.status).toBe(404);
    });
    it('can add food', async () => {
        const response = await mockServerMethods.post('/addfood').send({
            name: 'pizza',
            origin: 'Italy',
            rating: '4.5',
            price: '10$',
            vegan: false
        });
        expect(response.status).toBe(201);
    });
    it('can read all food', async () => {
        const response = await mockServerMethods.get('/food');
        expect(response.status).toBe(200);
    });
    it('can read certain food', async () => {
        const response = await mockServerMethods.get('/food/1');
        expect(response.status).toBe(200);
    });
    it('can update food', async () => {
        const response = await mockServerMethods.put('/updatefood/1');
        expect(response.status).toBe(201);
    });
    it('can delete food', async () => {
        const response = await mockServerMethods.delete('/deletefood/1');
        expect(response.status).toBe(204);
    });

    //-------------------------------------------------------------------------

    it('can add clothes', async () => {
        const response = await mockServerMethods.post('/addclothes').send({
            hats: 'Nike',
            jackets: 'Adidas',
            shirts: 'H&M',
            pants: 'Levi\'s',
            shoes: 'Nike'
        });
        expect(response.status).toBe(201);
    });
    it('can read all clothes', async () => {
        const response = await mockServerMethods.get('/clothes');
        expect(response.status).toBe(200);
    });
    it('can read certain clothes', async () => {
        const response = await mockServerMethods.get('/clothes/1');
        expect(response.status).toBe(200);
    });
    it('can update clothes', async () => {
        const response = await mockServerMethods.put('/updateclothes/1');
        expect(response.status).toBe(201);
    });
    it('can delete clothes', async () => {
        const response = await mockServerMethods.delete('/deleteclothes/1');
        expect(response.status).toBe(204);
    });
})

afterAll(async () => {
    await db.drop();
})