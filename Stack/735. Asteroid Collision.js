// 735. Asteroid Collision

// We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.
// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

var asteroidCollision = function(asteroids) {
  let stack = [];

  for (let asteroid of asteroids) {
      let alive = true;

      while (alive && asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
          let top = stack[stack.length - 1];

          if (top < -asteroid) {
              stack.pop(); 
              continue; 
          } else if (top === -asteroid) {
              stack.pop(); 
          }

          alive = false;
      }

      if (alive) stack.push(asteroid);
  }

  return stack;
};
