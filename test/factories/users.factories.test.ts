import chai from 'chai'
import { ServerUserArray } from '../../src/interfaces/serverUserArray'
import { UsersFactory } from '../../src/factories/users.factory'

chai.should()

describe('User Factory', () => {
    it('User Conversion', (done) => {
        const originalUser: ServerUserArray = {
            data: [
                {
                    id: 1,
                    name: 'TestPrefix TestName TestLastName',
                    username: 'TestUserName',
                    email: 'testEmail',
                    address: {
                        street: 'TestStreet',
                        suite: 'TestSuite',
                        city: 'TestCity',
                        zipcode: 'TestZip-12345',
                        geo: {
                            lat: 'Lat',
                            lng: 'Lon',
                        },
                    },
                    phone: 'TestPhone',
                    website: 'TestWebsite',
                    company: {
                        name: 'TestCompanyName',
                        catchPhrase: 'TestVeryCatchyCatchhrase',
                        bs: 'TestBS',
                    },
                },
            ],
        }
        const testPostFactory = new UsersFactory()
        const testResult = testPostFactory.convertNames(originalUser)
        testResult.should.be.a('array')
        testResult.should.have.lengthOf(1)
        testResult[0].should.have.keys([
            'id',
            'prefix',
            'firstName',
            'lastName',
            'email',
            'address',
            'geolocation',
            'companyName',
        ])
        testResult[0].should.have.property('id', 1)
        testResult[0].should.have.property('prefix', 'TestPrefix')
        testResult[0].should.have.property('firstName', 'TestName')
        testResult[0].should.have.property('lastName', 'TestLastName')
        testResult[0].should.have.property('email', 'testEmail')
        testResult[0].should.have.property(
            'address',
            'TestStreet TestSuite TestCity TestZip-12345'
        )
        testResult[0].should.have.property('geolocation', '(Lat,Lon)')
        testResult[0].should.have.property('companyName', 'TestCompanyName')
        done()
    })
})
