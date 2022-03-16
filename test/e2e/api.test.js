import { 
    jest,
    expect,
    test,
    describe,
    it
 } from '@jest/globals'
 
import superTest from 'supertest'
import Server from '../../src/server'

 describe('API E2E Test Suite', () => {
    test('GET / should return an array', async () => {
        const response = await superTest(Server)
        .get('/')

        const data = JSON.parse(response.text)
        expect(data).toBeInstanceOf(Array)
        expect(data.lenght).toEqual(0)
    })
    test('POST / should save an item and return ok', async () => {
        const response = await superTest(Server)
        .post('/')
        .send({
            nome: 'hilbert',
            age: 27
        })
        const expectedResponse = { ok: 1 }
        expect(JSON.parse(response.text)).toStrictEqual(expectedResponse)
    })

     test.todo('GET / - should return an array')
     test.todo('POST / - should save an item and return ok')
     test.todo('DELETE / - should delete all items')
 })