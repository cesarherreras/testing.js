const request = require("supertest");
//Donde se crea la aplicación
const createApp = require("../src/app");
const { MongoClient } = require("mongodb");
const { config } = require("../src/config");

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe("Test for books", () => {
  let app = null;
  let server = null;
  let database = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe("Test for [GET] /api/v1/books", () => {
    test("should return a list of books", async () => {
      //Arrange
      const seedData = await database.collection("books").insertMany([
        {
          name: "Book1",
          year: 1998,
          author: "Cesar",
        },
        {
          name: "Book2",
          year: 1999,
          author: "Liz",
        },
      ]);
      console.log(seedData);
      //Act
      const { body } = await request(app).get("/api/v1/books").expect(200);
      console.log(body);
      //Assert
      expect(body.length).toEqual(seedData.insertedCount);
    });
  });
});
