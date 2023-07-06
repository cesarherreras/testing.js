//Presenta hoisting
const mockGetAll = jest.fn();

jest.mock("../src/lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
);

const request = require("supertest");
//Donde se crea la aplicación
const createApp = require("../src/app");
const { generateManyBooks } = require("../src/fakes/book.fake");

describe("Test for books", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe("Test for [GET] /api/v1/books", () => {
    test("should return a list of books", async () => {
      //Arrange
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      const { body } = await request(app).get("/api/v1/books").expect(200);
      console.log(body);
      expect(body.length).toEqual(fakeBooks.length);
    });
  });
});
