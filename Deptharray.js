function getarrdepth(obj) {
    if (Array.isArray(obj)) return 1 + Math.max(...obj.map(t => getarrdepth(t)))
    else 
      return 0
}
let arr=[1,2,[3,4,[5,6],7,[8,[9,91]],10],11,12]
console.log(getarrdepth(arr))
console.log(getarrdepth([1,[1]]));