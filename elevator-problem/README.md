# Requirements:

1. An elevator can move up, down or standstill.
2. An elevator can transfer passengers from one floor in a building to another floor in the minimum time possible.
3. Elevator door can only open when it is standstill in a floor (i.e. not moving).
4. Let’s first discuss the number of floors that a building can have. The tallest building in the world is Burj Khalifa and it has around 163 floors. Let’s just assume that our system has 200 floors, which is still far greater than what the tallest building has. We cannot just assume some arbitrarily large number. When we are gathering requirements, we need to make sure that we are still collecting some reasonable requirements.
5. Burj Khalifa has around 57 elevators. We can assume in our system we have around 100 elevators.
6. Then there are some requirements related to each elevator like:

```
a. Number of passengers / Load on the elevator
b. Moving speed of the elevator
```

7. Now fourth requirement is about what we would like to minimize.

```
a. Do we like to minimize the wait time of the passengers?
b. Or do we like to minimize the overall wait time in the system?
```

8. You should also discuss with the interviewer that whether he would like to have different operational zones or sectors in the elevator system. A zone is the set of floors that are covered by a set of elevators. E.g.
   In our case of 200 floors and 100 elevators, we can, e.g., divide all the floors into 4 zones:

```
· From 1–50: operated by 25 elevators
· From 51–100: operated by 25 elevators
· From 101–150: operated by 25 elevators
· From 151–200: operated by 25 elevators
```

#### Apart from the above requirements, there are some extended requirements like:

1. Triggering emergency alarm/brake
2. VIP or utility elevators
