const Habit = require("../../../models/Habit");
const { initConnection } = require("../../../dbConfig/init");
jest.mock("pg");

describe("Habit", () => {
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

  describe("findById", () => {
    it("resolves with the habits for a given user upon successful db query", async () => {
      const habits = await Habit.findById("1");
      expect(habits[0]).toEqual(
        objectContaining({
          habit_id: 1,
          habit_name: "running",
          goal_freq: 10,
          units: "kilometer",
          cum_freq: 2,
          progress_streak: 0,
          habit_date: 28-03-2022,
        })
      );
      expect(habits[0]).toHaveProperty("id");
    });
  });

  describe("create", () => {
    it("resolves with a new habit for an existing user", async () => {
      const habitData = {
        habit_id: 1,
        habit_name: "running",
        goal_freq: 10,
        units: "kilometer",
        cum_freq: 2,
        progress_streak: 0,
        habit_date: 28-03-2022,
      };

      const newHabit = await Habit.create(habitData);
      expect(newHabit).toEqual(
        objectContaining({
          habit_id: 1,
          habit_name: "running",
          goal_freq: 10,
          units: "kilometer",
          cum_freq: 2,
          progress_streak: 0,
          habit_date: 28-03-2022,
        })
      );
    });
  });
});
