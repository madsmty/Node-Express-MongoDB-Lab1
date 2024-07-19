// Import the dependencies for testing
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app'

// Configure chai
chai.use(chaiHttp)
chai.should()

before( (done) =>
    {
    app.on("appStarted", function()
      {
        console.log("Server Started Correctly")
        true.should.equal(true)
        done()
      })
      app.on("appError", function()
      {
        console.log("Server could not start")
        true.should.equal(false)
        done()
      })
    })

describe('Test if server is running correctly',() => {
    it('', (done) => {
        done() })
})
