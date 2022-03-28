DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR (50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    pass_digest VARCHAR(20) NOT NULL
);


DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    habit_id SERIAL PRIMARY KEY,
    user_id INT,
    habit_name VARCHAR(50),
    goal_freq INT,
    units VARCHAR(50),
    cum_freq INT DEFAULT 0,
    progress_streak INT DEFAULT 0,
    habit_date DATE NOT NULL,
    FOREIGN KEY(user_id)
        REFERENCES users(user_id)
        ON DELETE SET NULL

);

/*
Example goal_freq, cum_freq, progress_streak

* 8 glasses of water/ day

* goal_fr = 8
* cum_freq= 0 by default
* progress_streak = 0 by default 

---

user adds 2 glasses of water, then:

* goal_fr = 8 (remains always the same if not changed by user)
* cum_freq= 2
* progress_streak = 1 -  ((goal_freq-cum_freq)/goal_freq) = 1 - ((8-2)/8) = 0.25 = 25%

-------

Example goal_freq, cum_freq, progress_streak

* 8 glasses of water/ day

* goal_fr = 8
* cum_freq= 0 by default
* progress_streak = 0 by default 

---

user adds 10 glasses of water, then:

* goal_fr = 8 (remains always the same if not changed by user)
* cum_freq= 10
* progress_streak = 1 -  ((goal_freq-cum_freq)/goal_freq) = 1 - ((8-10)/8) = 0.25 = 25%

if progress_streak >=1, then "bravo, you achieved your goal"
    * progress_streak >1
    * (progress_streak - 1) ---> you surpassed your goal by that value

*/
