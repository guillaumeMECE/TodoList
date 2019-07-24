// Test E2E for all Routes

const request = require('supertest');
const app = require('../app');

describe('[Routes] - API', () => {
    describe('All', () => {
        it('should return status 200', (done) => {
            // Arrange

            // Act

            // Assert
            request(app)
                .get('/api/all')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe('Add', () => {
        it('should return status 200', (done) => {
            // Arrange

            // Act

            // Assert
            request(app)
                .post('/api/add')
                .send({
                    task: 'devAgain'
                })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });
    describe('Add', () => {
        it('send without body should return status 400', (done) => {
            // Arrange

            // Act

            // Assert
            request(app)
                .post('/api/add')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400, done);
        });
    });
});
