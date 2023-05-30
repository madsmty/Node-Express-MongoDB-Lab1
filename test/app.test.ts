// Import the dependencies for testing
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app'

// Configure chai
chai.use(chaiHttp)
chai.should()

describe('Users', () => {
    describe('GET /', () => {
        // Test to get all students record
        it('Token is of regular user', (done) => {
            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtZGVsZW9uIiwidXNlclJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg1Mzg0NDAzfQ.zMDaBNq3gGQw_uAtO14voG4f4zyXqHD9uTgN526AH3U'

            chai.request(app)
                .get('/users')
                .set({ Authorization: `Bearer ${token}` })
                .end((err, res) => {
                    res.should.have.status(401)
                    res.body.should.have.property('message', 'Incorrect JWT')
                    done()
                })
        })
    })

    describe('GET /', () => {
        // Test to get all students record
        it('Token is of admin user', (done) => {
            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtZGVsZW9uIiwidXNlclJvbGUiOiJBRE1JTiIsImlhdCI6MTY4NTM4NjQ5N30.KgAuVpaEsc4YCUUEH6VZZ1Olzzhnqbs-A5r_1AjvcWA'

            chai.request(app)
                .get('/users')
                .set({ Authorization: `Bearer ${token}` })
                .end((err, res) => {
                    //console.log(res);
                    //console.log(err);
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    done()
                })
        })
    })
    describe('GET /', () => {
        // Test to get all students record
        it('Token sent but value is empty', (done) => {
            const token = ''

            chai.request(app)
                .get('/users')
                .set({ Authorization: `Bearer ${token}` })
                .end((err, res) => {
                    res.should.have.status(401)
                    res.body.should.have.property('message', 'Incorrect JWT')
                    done()
                })
        })
    })
    describe('GET /', () => {
        // Test to get all students record
        it('Incorrect token', (done) => {
            const token =
                'eyJhbGcJIUzI1iIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtZGVsZW9uIiwidXNlclJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg1Mzg0NDAzfQ.zMDaBNq3gGQw_uAtO14voG4f4zyXqHD9uTgN526AH3U'

            chai.request(app)
                .get('/users')
                .set({ Authorization: `Bearer ${token}` })
                .end((err, res) => {
                    res.should.have.status(401)
                    res.body.should.have.property('message', 'Incorrect JWT')
                    done()
                })
        })
    })
    describe('GET /', () => {
        // Test to get all students record
        it('No token', (done) => {
            chai.request(app)
                .get('/users')
                .end((err, res) => {
                    res.should.have.status(401)
                    res.body.should.have.property('message', 'Incorrect JWT')
                    done()
                })
        })
    })
})
