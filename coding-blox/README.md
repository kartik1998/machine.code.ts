## Design Online Coding Platform CODING BLOX (Design Leetcode LLD)

Reference: [leetcode-link](https://leetcode.com/discuss/interview-question/object-oriented-design/1177601/Flipkart-or-Machine-Coding-or-Design-Online-Coding-Platform-CODING-BLOX-Leetcode-LLD)

<b>https://leetcode.com/discuss/interview-question/object-oriented-design/1177601/Flipkart-or-Machine-Coding-or-Design-Online-Coding-Platform-CODING-BLOX-Leetcode-LLD</b>

- Coding Blox is an Online Coding Platform that allows a user to Sign Up, Create Contests and participate in Contests hosted by Others.
- Each contest can have a level (LOW, MEDIUM, HIGH) and will contain a set of questions.
- Each question will have different levels of difficulty(LOW, MEDIUM, HIGH) and score.
- Based on the contest level, the question set is going to be decided. Contest level with LOW difficulty will have questions with LOW difficulty level.
- Final score will be decided based on the difficulty LEVEL chosen for a contest
- Users solve problems and get points based on the difficulty of the problems and after the contests scores of the users are updated.

<b>Functionalities/Requirements:</b>

- CreateUser <user_name>
- CreateQuestion <difficulty_level>
- ListQuestion <difficulty_level>
- CreateContest <contest_name> <contest_level> <contest_creator_user_name>
- ListContest <difficulty_level>
- AttendContest <contest_id> <user_name>
- RunContest <contest_id> <contest_creator_user_name>
- LeaderBoard <sorting order asc|desc>
- ContestHistory <contest_id>
- WithdrawContest <contest_id>
