const Habit = require("../../../models/Habit");
const pg = require("pg");
const db = require("../../../dbConfig/init");
jest.mock("pg");

describe("Habit", () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe('all', () => {
    test('it resolves with Users on successful db query', async () => {
        jest.spyOn(db, 'query')
            .mockResolvedValueOnce({ rows: [{}, {}, {}]});
        const all = await Habit.all;
        expect(all).toHaveLength(3)
    })
});

  describe("findByHabitId", () => {
    it("resolves with the habits for a given user upon successful db query", async () => {
      const habitData = {
        habit_id: 1,
        habit_name: "running",
        goal_freq: 10,
        units: "kilometer",
        cum_freq: 2,
        progress_streak: 0,
        habit_date: "28-03-2022",
      };
      jest.spyOn(db, "query")
      .mockResolvedValueOnce({ rows: [habitData] });
      const result = await Habit.findByHabitId(1);
      expect(result).toBeInstanceOf(Habit);
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
        habit_date: "28-03-2022",
      };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [habitData] });
      const result = await Habit.create("New Habit");
      expect(result).toBeInstanceOf(Habit);
    });
  });
});
