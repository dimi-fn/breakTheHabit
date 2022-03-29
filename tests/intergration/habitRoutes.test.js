describe('habits endpoints', () => {
    let api;

    beforeEach(async () => {
        await resetTestDB();
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'));
    });

    afterAll(done => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('should create a new habit for an existing user', async () => {
        const res = await request(api)
            .post('/habits/id')
            .send({
                habit_id: 1,
                habit_name: 'running',
                goal_freq: 10,
                units:'kilometre',
                cum_freq:  2,
                progress_streak: 0,
                habit_date: 29/03/2022,
            });
        expect(res.statusCode).toEqual(201);
    
        const existingUserRes = await request(api).get('/users/id');
        expect(existingUserRes.statusCode).toEqual(200);
        expect(existingUserRes.body.habits.length).toEqual(2);
    });
    
    it('should not allow creating a habit with the same name as a previously existing one', async () => {
        // Create a custom habit
        const res = await request(api)
            .post('/habits/id')
            .send({
                habit_id: 1,
                habit_name: 'running',
                goal_freq: 10,
                units:'kilometre',
                cum_freq:  2,
                progress_streak: 0,
                habit_date: 29/03/2022,
            });
        expect(res.statusCode).toEqual(201);
});
