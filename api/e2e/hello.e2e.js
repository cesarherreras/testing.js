const request = require("supertest");
//Donde se crea la aplicación
const createApp = require("../src/app");

describe("Test for hello endpoint", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe("Test for [GET] /", () => {
    test('should return "Hello World!', () =>
      request(app)
        .get("/")
        .expect(200)
        .then((response) => {
          expect(response.text).toEqual("Hello World!");
        }));
  });
});
