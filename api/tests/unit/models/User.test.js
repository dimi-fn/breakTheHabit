const User = require("../../../models/User");
const { initConnection } = require("../../../dbConfig/init");
jest.mock("pg");

describe("User", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await initConnection();
    db = connection.db(process.env.DB_NAME);
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await resetTestDB();
  });

  describe("all", () => {
    it("should resolve with all users on successful db query", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [{}, {}, {}] });
      const all = await User.all;
      expect(all).toHaveLength(3);
    });
  });

  describe('create', () => {
    it('resolves with a new user on successful db query', async () => {
        const data = {
            email: "testUser2@email.com",
            password: "password",
            username: "test user 2"
        }
        const user = await User.create(data);
        const users = await User.all;
        expect(user).toHaveProperty('user_id');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('pass_digest');
        expect(user).toHaveProperty('username');
        expect(users.all.length).toEqual(4);
    });

    describe('findById', () => {
        it('should resolve with a user on successful db query', async () => {
            const userData = new User({
                user_id: 1,
                email: "testUser1@email.com",
                pass_digest: "password",
                username: "test user 1",
            });
            const user = await User.findByEmail("testUser1@email.com");
            expect(user).toEqual(userData);
            expect(user).toBeInstanceOf(User);
        });
    });
});







});
