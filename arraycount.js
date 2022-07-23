const arr = [1,2,3,3,3,5,5,6,6,4,4,];

const count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count);