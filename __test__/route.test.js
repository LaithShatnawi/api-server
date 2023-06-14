'use strict';

const { app } = require('../src/server');
const { db } = require('../src/models/index');
const supertest = require('supertest');
const mockServerMethods = supertest(app);

beforeAll(async () => {
    await db.sync();
})

describe('testing my api server', () => {
    it('can add author', async () => {
        const response = await mockServerMethods.post('/authors').send({
            firstName: 'laith',
            lastName: 'shatnawi'
        });
        expect(response.status).toBe(201);
    });
    it('can read all authors', async () => {
        const response = await mockServerMethods.get('/authors');
        expect(response.status).toBe(200);
    });
    it('can read certain author', async () => {
        const response = await mockServerMethods.get('/authors/1');
        expect(response.status).toBe(200);
    });
    it('can update author', async () => {
        const response = await mockServerMethods.put('/authors/1');
        expect(response.status).toBe(201);
    });
    it('can delete author', async () => {
        const response = await mockServerMethods.delete('/authors/1');
        expect(response.status).toBe(204);
    });
    it('can read author\'s books', async () => {
        const respons = await mockServerMethods.get('/authorsOrders/1');
        expect(respons.status).toBe(200);
    });
})
//---------------------------------------------------------------------------------
describe('testing my api server', () => {
    // it('can add book', async () => {
    //     const response = await mockServerMethods.post('/books').send({
    //         bookName: 'laith',
    //         publishedOn: 23,
    //         authorId: 1
    //     });
    //     expect(response.status).toBe(201);
    // });
    it('can read all books', async () => {
        const response = await mockServerMethods.get('/books');
        expect(response.status).toBe(200);
    });
    it('can read certain books', async () => {
        const response = await mockServerMethods.get('/books/1');
        expect(response.status).toBe(200);
    });
    // it('can update books', async () => {
    //     const response = await mockServerMethods.put('/books/1');
    //     expect(response.status).toBe(201);
    // });
    it('can delete books', async () => {
        const response = await mockServerMethods.delete('/books/1');
        expect(response.status).toBe(204);
    });
})

afterAll(async () => {
    await db.drop();
})