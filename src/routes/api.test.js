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
});
