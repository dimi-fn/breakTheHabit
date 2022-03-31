const User = require("../../../models/User");
// const { initConnection } = require("../../../dbConfig/init");
const pg = require('pg');
const db = require('../../../dbConfig/init')
jest.mock("pg");

describe("User", () => {

  beforeEach(() => jest.clearAllMocks())

  afterAll(() => jest.resetAllMocks())

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
        jest.spyOn(db,'query')
        .mockResolvedValueOnce({rows: [ data] });
        const result = await User.create('New User');
        expect(result).toBeInstanceOf(User)
    });

    describe('findUserById', () => {
        it('should resolve with a user on successful db query', async () => {
            const userData = new User({
                user_id: 1,
                email: "testUser1@email.com",
                pass_digest: "password",
                username: "test user 1",
            });
            jest.spyOn(db, 'query')
            .mockResolvedValueOnce({rows: [ userData] });
        const result = await User.findUserById(1);
        expect(result).toBeInstanceOf(User)
        });
    });
});



});
