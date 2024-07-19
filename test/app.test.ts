// Import the dependencies for testing
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app'

// Configure chai
chai.use(chaiHttp)
chai.should()

before( () =>
    {
      app.on("appStarted", function()
      {
        console.log("Server Started Correctly")
        //done()
      })
    })

describe('Test if server is running correctly',() => {
    it('', (done) => {

        done() })
})
  