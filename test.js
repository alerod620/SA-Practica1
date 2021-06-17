const expect = require('chai').expect
const request = require('supertest')('http://localhost:4000')
process.env.NODE_ENV = 'test'
const app = require('./index')
const assert = require('assert');

describe('GET /Test', function() {
    it('Nombre correcto', async function() {
        const response = await request 
        .get('/Verificar/Alejandro')

        console.log(response.body);
        expect(response.body).to.be.eql('1');
    })

    it('Nombre incorrecto', async function() {
        const response = await request 
        .get(`/Verificar/123`)

        console.log(response.body);
        expect(response.body).to.be.eql('0');
    })
})

