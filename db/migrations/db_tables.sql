DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id serial PRIMARY KEY,
    username VARCHAR (50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    pass_digest VARCHAR(20) NOT NULL
);


DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    habit_id serial PRIMARY KEY,
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
Example 1: that utilizes the goal_freq, cum_freq, progress_streak

* User sets on frontend the goal that wants to track e.g. 8 glasses of water. Then:
    * goal_freq = 8
    * cum_freq= 0 by default on the database (i.e. the user hasn't yet drunk any glass of water)
    * progress_streak = 0 by default on the database (i.e. progress is 0% since user hasn't drunk any glass of water)

---

user adds 2 glasses of water on frontend, then on the backend:

* goal_fr = 8 (remains always the same if not changed by user)
* cum_freq = 2 
* progress_streak = 1 -  ((goal_freq-cum_freq)/goal_freq) = 1 - ((8-2)/8) = 0.25 --> (i.e. progress of 25% in terms of the goal_fr)

Frontend will have access to the updated variables above to be utilized, e.g. a progress bar per habit of user

-------

Example 2: goal_freq, cum_freq, progress_streak

* 8 glasses of water/ day

* goal_fr = 8
* cum_freq= 0 by default
* progress_streak = 0 by default 

---

user adds 10 glasses of water, then:

* goal_fr = 8 (remains always the same if not changed by user)
* cum_freq= 10
* progress_streak = 1 -  ((goal_freq-cum_freq)/goal_freq) = 1 - ((8-10)/8)  = 1.25 (i.e. 125%, the user has surpassed the goal)

* In cases like that, then this could be utlized like following:
if (progress_streak>=1){
    console.log("congrats, you achieved your goal")
    if (progress_streak > 1){
        console.log(`you surpassed your goal by ${progress_streak-1}%`)
    }
}
*/
