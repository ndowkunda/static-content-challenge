const request = require('supertest');
const app = require('../../../app.js')
const { getPage } = require('../../../src/controllers/getPage.js')

describe(' GET /mock-content', () => {
  beforeAll(done => {
    done()
  })
  afterAll(done => {
    done()
  })

  test('should respond with a 200 status code', () => {
    return request(app)
      .get("/mock-content", getPage)
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  })
  test('should respond with a body that contains the correct HTML content', () => {
    const req = { url: '/mock-content' }
    const res = { render: jest.fn() }
    getPage(req, res)
    expect(res.render.mock.lastCall[1]).toEqual(expect.objectContaining({ content: "<h1>This is the Mock Content Page</h1>\n" + "<p>This is a test content page.</p>\n" })
    )
  })

  describe(' GET /file-does-not-exist', () => {
    beforeAll(done => {
      done()
    })
    afterAll(done => {
      done()
    })

    test('should respond with a 404 status code', () => {
      return request(app)
        .get("/file-does-not-exist", getPage)
        .then(response => {
          expect(response.statusCode).toBe(404);

        });
    })
  })
})