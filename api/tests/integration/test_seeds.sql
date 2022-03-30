TRUNCATE users, habits RESTART IDENTITY;

INSERT INTO users (username, email, pass_digest)
VALUES
('test_username1', 'aa@gmail.com', 'ddwd59dw95ddw9wd29w'),
('test_username2', 'bb@gmail.com', 'dawd59dwdw95d9wd57q'),
('test_username3', 'cc@gmail.com', 'da3dw43dw95d9wd59q'),
('test_username4', 'dd@gmail.com', 'dadw34dw95dwwd51q');

INSERT INTO habits (user_id, habit_name, goal_freq, units, habit_date)
VALUES
(
    'Test a habit name', 
    5, 
    $str$Test book 1 description$str$,
    '2022-04-01'
),
(
    'Test another habit name', 
    6, 
    $str$Test book 1 description$str$,
    '2022-04-02'
),
(
    'Test a cool habit name', 
    6, 
    $str$Test book 1 description$str$,
    '2022-04-03'

);
