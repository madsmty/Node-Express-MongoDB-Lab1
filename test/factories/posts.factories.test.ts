import chai from 'chai'
import { ServerPostArray } from '../../src/interfaces/serverPostArray'
import { ServerUserElement } from '../../src/interfaces/serverUserElement'
import { PostsFactory } from '../../src/factories/posts.factory'

chai.should()

describe('Post Factory', () => {
    it('Post Conversion', (done) => {
        const originalPost: ServerPostArray = {
            data: [
                { userId: 1, id: 1, title: 'testTitle1', body: 'testBody1' },
            ],
        }
        const originalUser: ServerUserElement = {
            data: {
                id: 1,
                name: 'TestName TestLastName',
                username: 'TestUserName',
                email: 'testEmail',
                address: {
                    street: 'TestStreet',
                    suite: 'TestSuite',
                    city: 'TestCiy',
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
        }
        const testPostFactory = new PostsFactory()
        const testResult = testPostFactory.convertPosts(
            originalUser,
            originalPost
        )
        testResult.should.be.a('array')
        testResult.should.have.lengthOf(1)
        testResult[0].should.have.keys([
            'userId',
            'name',
            'email',
            'postId',
            'title',
            'body',
        ])
        testResult[0].should.have.property('userId', 1)
        testResult[0].should.have.property('name', 'TestName TestLastName')
        testResult[0].should.have.property('email', 'testEmail')
        testResult[0].should.have.property('postId', 1)
        testResult[0].should.have.property('title', 'testTitle1')
        testResult[0].should.have.property('body', 'testBody1')
        done()
    })
})
